export class TaskItem{
    TaskId: Number;                //DatabaseGenerated on the controller
    UserId: Number;                //Required
    TaskTitle: string;             //Required StringLength(60)
    TaskDescription?: string;       //StringLength(255)
    DueDateTime: Date;
    NotifyDateTime: Date;
    CreatedDate: Date;
    ModifiedDate: Date;
    HasDueDate: boolean;
    HasNotifyDate: boolean;
    IsCompleted: boolean;
}

    // const body: TaskItem = {
    //   TaskId: 0,                           //should I use null
    //   UserId: postedTask.UserId,
    //   TaskTitle: postedTask.TaskTitle,            
    //   TaskDescription: postedTask.TaskDescription,       
    //   DueDateTime: postedTask.DueDateTime,
    //   NotifyDateTime: postedTask.NotifyDateTime,
    //   CreatedDate: postedTask.CreatedDate,
    //   ModifiedDate: postedTask.ModifiedDate,
    //   HasDueDate: postedTask.HasDueDate,
    //   HasNotifyDate: postedTask.HasNotifyDate,
    //   IsCompleted: postedTask.IsCompleted
    // }

