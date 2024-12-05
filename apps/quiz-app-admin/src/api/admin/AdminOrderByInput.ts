import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  adminName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  permissions?: SortOrder;
  updatedAt?: SortOrder;
};
