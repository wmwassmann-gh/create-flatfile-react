import { Flatfile } from "@flatfile/api";
import { subscribers } from "./sub";
import { nonSubscribers } from "./nonSub";

export const workbook: Flatfile.CreateWorkbookConfig = {
  name: "All Data",
  labels: ["pinned"],
  namespace: "portal",
  sheets: [subscribers, nonSubscribers],
};
