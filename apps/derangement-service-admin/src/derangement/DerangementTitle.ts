import { Derangement as TDerangement } from "../api/derangement/Derangement";

export const DERANGEMENT_TITLE_FIELD = "method";

export const DerangementTitle = (record: TDerangement): string => {
  return record.method?.toString() || String(record.id);
};
