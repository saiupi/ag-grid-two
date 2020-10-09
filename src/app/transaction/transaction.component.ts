import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  // submitted = false;
  toatlAmount = 0;
  getTotalData;
  getTotalCreditedData;
  creditedData = [];
  debitedData = [];
  filteredData;
  filteredDebitedData;
  date = new Date();

  // form declaration with validations
  transactionForm = this.formBuilder.group({
    amount: ['', [Validators.required, Validators.min(1), Validators.max(10000), Validators.pattern("^[0-9]*$")]],
    reason: ['', [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z\\s]+$")]]
  });

  constructor(private formBuilder: FormBuilder, private service: ServicesService,
    private toastr: ToastrManager) { }

  ngOnInit() {
    this.getData();
  }

  // convenience getter for easy access to form fields
  get f() { return this.transactionForm.controls; }

  getData() {
    this.service.getData().subscribe(res => {
      this.getTotalData = res;
      console.log(this.getTotalData);
      
      for (let key of this.getTotalData) {
        this.toatlAmount = key.toatlAmount;
        //spending array
        this.filteredData = this.getTotalData.filter(val => {
          return val.debitOrCredit === true;
        })
        //received array
        this.filteredDebitedData = this.getTotalData.filter(val => {
          return val.debitOrCredit === false;
        })
      }
      console.log(this.filteredData);

    })
  };



  //credit transactions
  postCreditTransaction() {
    // this.submitted = true;
    // stop here if form is invalid
    if (this.transactionForm.invalid) {
      return;
    }

    let obj = {
      amount: JSON.parse(this.transactionForm.controls.amount.value),
      reason: this.transactionForm.controls.reason.value,
      toatlAmount: this.toatlAmount + JSON.parse(this.transactionForm.controls.amount.value),
      debitOrCredit: true,
      date: this.date
    }

    this.service.postCreditTransaction(obj).subscribe(res => {
      this.getData();
      if (res) {
        this.toastr.successToastr('Credited Successfully', 'Success!');
      }
      this.transactionForm.reset();
      // this.submitted = false;
    });

  }

  //Debit transactions
  postDebitTransaction() {
    // this.submitted = true;
    // stop here if form is invalid
    if (this.transactionForm.invalid) {
      return;
    }

    if (this.toatlAmount > JSON.parse(this.transactionForm.controls.amount.value)) {
      let obj = {
        amount: JSON.parse(this.transactionForm.controls.amount.value),
        reason: this.transactionForm.controls.reason.value,
        toatlAmount: this.toatlAmount - JSON.parse(this.transactionForm.controls.amount.value),
        debitOrCredit: false,
        date: this.date
      }
      this.service.postCreditTransaction(obj).subscribe(res => {
        this.getData();
        if (res) {
          this.toastr.successToastr('Debited Successfully', 'Success!');
        }
        this.transactionForm.reset();
        // this.submitted = false;
      });

    }
    else {
      this.toastr.warningToastr('Insufficient Balance', 'Opps!');
    }
  }

}