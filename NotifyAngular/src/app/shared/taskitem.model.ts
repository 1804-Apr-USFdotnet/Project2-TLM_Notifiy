export class TaskItem{
    TaskId: Number;                //DatabaseGenerated on the controller
    UserId: Number;                //Required
    TaskTitle: string;             //Required StringLength(60)
    TaskDescription: string;       //StringLength(255)
    DueDateTime: Date;
    NotifyDateTime: Date;
    CreatedDate: Date;
    ModifiedDate: Date;
    HasDueDate: boolean;
    HasNotifyDate: boolean;
    IsCompleted: boolean;
}

//Approved



