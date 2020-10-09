import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DefulatServiceService } from '../defulat-service.service';

@Component({
  selector: 'app-ag-grid-two',
  templateUrl: './ag-grid-two.component.html',
  styleUrls: ['./ag-grid-two.component.css']
})
export class AgGridTwoComponent implements OnInit {



  columnDefs: any
  rowData: any
  dummyRowdata: any
  filterData: any
  searchedData: any
  searchCount: number = 0
  filterCount: number = 0

  gridOptions
  defaultColDef = {
    sortable: true,
    filter: true,
    minwidth: 100,
    resizable: true,
    // floatingFilter: true,
  };


  constructor(private service: HttpClient, private customDefined: DefulatServiceService) {
  }

  ngOnInit(): void {
    this.getValues()
  }

  getValues() {
    let data
    this.service.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json').subscribe(res => {
      data = res
      this.settoGrid(data)
    })
  }
  settoGrid(data) {
    this.columnDefs = this.generateColumns(data)
    this.dummyRowdata = data
    this.rowData = data
  }
  generateColumns(data: any[]) {
    let columnDefinitions = [];
    data.map(object => {
      Object
        .keys(object)
        .map(key => {
          let mappedColumn = {
            headerName: key.toUpperCase(),
            field: key
            
          }

          columnDefinitions.push(mappedColumn);
        })
    })
    columnDefinitions = columnDefinitions.filter((column, index, self) =>
      index === self.findIndex((colAtIndex) => (
        colAtIndex.field === column.field
      ))
    )
    return columnDefinitions;
  }

  search(e) {
    console.log(e)
    this.gridOptions.api.setQuickFilter(e)
  }

  filter(e) {
    if (this.searchCount == 0) {
      if (e != "") {
        let rangeArray = e.split('-')
        this.filterData = this.customDefined.filetrWithRange(this.dummyRowdata, rangeArray)
        this.rowData = this.filterData
        this.filterCount = 1
      } else {
        this.rowData = this.dummyRowdata
        this.filterCount = 0
      }
    } else {
      if (e != "") {
        let rangeArray = e.split('-')
        this.filterData = this.customDefined.filetrWithRange(this.searchedData, rangeArray)
        this.rowData = this.filterData
        this.filterCount = 1
      } else {
        this.rowData = this.searchedData
        this.filterCount = 0
      }
    }
  }

  onGridReady(event) {
    this.gridOptions = event
  }
  downloadCSV() {
    var params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: "bikesmodal.csv"
    };
    this.gridOptions.api.exportDataAsCsv(params);
  }


}



