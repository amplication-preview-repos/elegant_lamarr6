export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  status: string | null;
  totalAmount: number | null;
  updatedAt: Date;
};
