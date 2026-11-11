export type Status = "Pending" | "In-Transit" | "Delivered";

export interface Order {
  _id: string;
  packageSize: string;
  customer: string;
  status: Status;
}