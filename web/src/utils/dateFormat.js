import { format } from "date-fns";

export const displayDateFormat = date => {
  return format(new Date(date), "HH:mm:ss dd/MM/yyyy");
};

export const apiDateFormat = date => {
  return format(new Date(date), "yyyy-MM-dd HH:mm:ss");
};
