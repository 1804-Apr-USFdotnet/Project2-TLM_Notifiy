export class BillItem {
    BillId: Number;             // DatabaseGenerated
    UserId: Number;             // Required
    BillHolder: string;         // Required StringLength(60)
    DueDate: Date;              // Required
    AmountOwed: Number;         // Required DataType.Currency
    Paid? = false;
    Automatic? = false;
    Description?: string;        // StringLength(255)
}

//We might have to add EfUser 