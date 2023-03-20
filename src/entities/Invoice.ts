export interface Invoice {
  value: string;
  number: number;
  description: string;
  accrualMonth: Date;
  receiptDate: Date;
  corporationName: string;
}
