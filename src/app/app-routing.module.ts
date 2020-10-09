import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridTwoComponent } from './ag-grid-two/ag-grid-two.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
  path:"trans",
  component:TransactionComponent
},
{
  path:"g",
  component:AgGridComponent
},
{
  path:"",
  component:AgGridTwoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
