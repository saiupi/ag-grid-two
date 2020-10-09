import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ColumnDefs;  
  RowData: any;  
  AgLoad: boolean;  
  constructor(private http:HttpClient) { }  
  
  ngOnInit() {  
    this.GetAgColumns();  
    this.GetGiftVoucherList();  
  }  
  GetAgColumns() {  
    this.ColumnDefs = [  
      { headerName: 'ArtNo', field: 'ArtNo', sortable: true, filter: true },  
      { headerName: 'Provider', field: 'Provider', sortable: true, filter: true },  
      { headerName: 'ProviderArtNo', field: 'ProviderArtNo', sortable: true, filter: true },  
      { headerName: 'Brand', field: 'Brand', sortable: true, filter: true },  
      { headerName: 'Price', field: 'Price', sortable: true, filter: true },  
      { headerName: 'BuyAccount', field: 'BuyAccount', sortable: true, filter: true }  ,


      // { field: 'make', sortable: true, filter: true },
      // { field: 'model', sortable: true, filter: true },
      // { field: 'price', sortable: true, filter: true }
    ];  
  }  
  GetGiftVoucherList() {  
    this.AgLoad = true;  

    // this.RowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
    
    this.RowData = [  
      {  
        ArtNo: "100",  
        Provider: "IPhone 11",  
        ProviderArtNo: "2rt",  
        Brand: "Apple",  
        Price: 7810.23,  
        BuyAccount: "789",  
      },  
      {  
        ArtNo: "101",  
        Provider: "Samsung galaxy",  
        ProviderArtNo: "8bn",  
        Brand: "Samsung",  
        Price: 2310.23,  
        BuyAccount: "562",  
      },  
      {  
        ArtNo: "102",  
        Provider: "Iphone 11 Pro",  
        ProviderArtNo: "6km",  
        Brand: "Apple",  
        Price: 7810.23,  
        BuyAccount: "236",  
      },  
      {  
        ArtNo: "103",  
        Provider: "Intex",  
        ProviderArtNo: "3gh",  
        Brand: "Intex",  
        Price: 5810.23,  
        BuyAccount: "589",  
      },  
      {  
        ArtNo: "100",  
        Provider: "IPhone 11",  
        ProviderArtNo: "7df",  
        Brand: "Apple",  
        Price: 7810.23,  
        BuyAccount: "145",  
      },  
      {  
        ArtNo: "101",  
        Provider: "Samsung galaxy",  
        ProviderArtNo: "8rt",  
        Brand: "Samsung",  
        Price: 2310.23,  
        BuyAccount: "896",  
      },  
      {  
        ArtNo: "102",  
        Provider: "Iphone 11 Pro",  
        ProviderArtNo: "4ol",  
        Brand: "Apple",  
        Price: 7810.23,  
        BuyAccount: "475",  
      },  
      {  
        ArtNo: "103",  
        Provider: "Intex",  
        ProviderArtNo: "9pl",  
        Brand: "Intex",  
        Price: 5810.23,  
        BuyAccount: "563",  
      }  
    ];  
  }  
}
