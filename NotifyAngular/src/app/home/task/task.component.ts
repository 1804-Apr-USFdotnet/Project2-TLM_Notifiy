import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { TaskItem } from '../../shared/taskitem.model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskBucket: TaskItem;
  isDeleteError : boolean = false;
  isPutError : boolean = false;
  isPostError : boolean = false;
  
  constructor(private userService : UserService, private router : Router) { }

  //We don't have to put it in here
  ngOnInit() {
    this.getTaskItems();
  }

  getTaskItems(){
    this.userService.getAllTaskItems().subscribe((data: any) => {
      this.taskBucket = data;
    });
  }

  OnDelete(id: Number) {
    this.userService.deleteTaskItem(id).subscribe((data: any) => {
      this.getTaskItems();
      console.log("Deleted " + id);
    },
      (err: HttpResponse) => {
        console.log(err);
        this.isDeleteError = true;
      });
  }

  OnPut(id: Number, task: TaskItem) {
    this.userService.putTaskItem(id, task).subscribe((data: any) => {
      this.getTaskItems();
      console.log("Updated " + id);
    },
      (err: HttpResponse) => {
        console.log(err);
        this.isDeleteError = true;
      });
  }

  OnSubmitPost(Title : string, Description : string, DueDate: Date) {
    const postedTask: TaskItem = {
      TaskId: 0,
      UserId: 0,
      TaskTitle: Title,
      TaskDescription: Description,
      DueDateTime: DueDate,
      NotifyDateTime: DueDate,
      CreatedDate: DueDate,
      ModifiedDate: DueDate,
      HasDueDate: true,
      HasNotifyDate: false,
      IsCompleted: false
    }
    this.userService.postTaskItem(postedTask).subscribe((data: any) => {
      this.getTaskItems();
      console.log("Posted" + Title);
    },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.isPostError = true;
      });
  }

}
