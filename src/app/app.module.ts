import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TransactionTypePipe } from './transaction-type.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from'ng6-toastr-notifications';
import { AgGridComponent } from './ag-grid/ag-grid.component';
// import { AgGridModule } from 'ag-grid-angular/lib/ag-grid-angular.module';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridTwoComponent } from './ag-grid-two/ag-grid-two.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionTypePipe,
    AgGridComponent,
    AgGridTwoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
