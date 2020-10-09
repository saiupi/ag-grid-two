import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  importAgGrid: any;

  constructor() { }

  ngOnInit(): void {
  }
  @Input() ColumnDefs: any;  
  @Input() RowData: any;  
  @Input() IsColumnsToFit: boolean;  
  
  gridApi: any;  
  gridColumnApi: any;  
  
  BindData(params) {  
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi;  
    params.api.setRowData(this.RowData);  
    if (this.IsColumnsToFit) {  
      this.gridApi.sizeColumnsToFit();  
    }  
  } 
  onBtnExportDataAsCsv() {
    var params = this.RowData;
    this.gridApi.exportDataAsCsv(params);
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        this.importAgGrid=this.RowData.push(formData);  
        console.log("kkk",this.importAgGrid);
        
    }
   
}

  

  // onBtnExportDataAsExcel() {
  //   var params = this.RowData;
  //   this.gridApi.exportDataAsExcel(params);
  // } 

}
