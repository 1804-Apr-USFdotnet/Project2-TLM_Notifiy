import { HttpErrorResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserService } from './../../shared/user.service';
import { BillItem } from './../../shared/billItem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  billBucket: BillItem;
  isPostError = false;
  billHolder: string = ""; 
  dueDate: Date; 
  amountOwed: Number;
  description: string = "";
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getBillItems();
  }

  getBillItems(){
    this.userService.getAllBillItems().subscribe((data: any) => {
      this.billBucket = data;
    });
  }
  onPost() {
    const newBill: BillItem = {
      BillId: 0,
      UserId: 0,
      BillHolder: this.billHolder,
      DueDate: this.dueDate,
      AmountOwed: this.amountOwed,
      Description: this.description
    }

    this.userService.postBillItem(newBill).subscribe((data: any) => { 
      this.getBillItems();
    },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.isPostError = true;
      });
  }

  onDetail(id: Number) {
    var x = document.getElementById('detail' + id);
    if(x.style.display === "none"){
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }

  onPut(id: Number, bill: BillItem) {

    this.userService.putBillItem(id, bill).subscribe((data: any) => {
      this.getBillItems();
    },
    (err:HttpErrorResponse) => {
      console.log(err);
      this.isPostError = true;
    });
  }

  onDelete(id: Number) {
    this.userService.deleteBillItem(id).subscribe((data: any) => {
      this.getBillItems();
    },
    (err: HttpErrorResponse) => {
      console.log(err);
      this.isPostError = true;
    });
  }
}
