import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { TaskItem } from '../../shared/taskitem.model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskBucket: TaskItem;
  
  constructor(private userService : UserService) { }

  //We don't have to put it in here
  ngOnInit() {
    this.userService.getAllTaskItems().subscribe((data: any) => {
      this.taskBucket = data;
    });
  }
}
