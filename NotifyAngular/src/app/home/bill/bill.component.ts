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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAllBillItems().subscribe((data: any) => {
      this.billBucket = data;
    });
  }

}
