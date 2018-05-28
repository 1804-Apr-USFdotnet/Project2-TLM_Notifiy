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
  isPostError : boolean = false;
  
  constructor(private userService : UserService, private router : Router) { }

  //We don't have to put it in here
  ngOnInit() {
    this.userService.getAllTaskItems().subscribe((data: any) => {
      this.taskBucket = data;
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
      this.router.navigate(['/tasks']);
      console.log("yeah posted");
    },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.isPostError = true;
      });
  }

}
