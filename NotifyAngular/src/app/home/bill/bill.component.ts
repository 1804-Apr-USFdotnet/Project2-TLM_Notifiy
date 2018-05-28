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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onPost(billHolder: string, dueDate: Date, amountOwed: Number,
  paid: boolean, auto: boolean, description?: string) {
    const newBill: BillItem = {
      BillHolder: billHolder,
      DueDate: dueDate,
      AmountOwed: amountOwed,
      Paid: paid,
      Automatic: auto,
      Description: description
    }

    this.userService.
  }
}
