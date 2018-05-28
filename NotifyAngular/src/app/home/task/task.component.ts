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
      TaskId: null,
      UserId: null,
      TaskTitle: Title,
      TaskDescription: Description,
      DueDateTime: DueDate,
      NotifyDateTime: null,
      CreatedDate: null,
      ModifiedDate: null,
      HasDueDate: null,
      HasNotifyDate: null,
      IsCompleted: null
    }
    this.userService.postTaskItem(postedTask).subscribe((data: any) => {
      this.router.navigate(['/tasks']);
    },
      (err: HttpErrorResponse) => {
        this.isPostError = true;
      });
  }

}
