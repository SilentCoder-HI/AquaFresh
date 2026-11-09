export type Order ={
  id: number,
  packageSize: string,
  customer: string,
  status : "Paid" |"Pending"
}