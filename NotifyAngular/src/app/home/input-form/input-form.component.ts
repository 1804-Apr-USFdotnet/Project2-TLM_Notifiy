import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../shared/taskitem.model';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  isPostError : boolean = false;
  
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
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
