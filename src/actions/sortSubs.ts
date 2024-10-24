// import api from "@flatfile/api";
// import { FlatfileEvent } from "@flatfile/listener";
import { ActionSpec } from "../plugins/jobs";

export const sortSubs: ActionSpec = {
  blueprint: {
    operation: "sort-subs",
    mode: "foreground",
    label: "Sort Subscribers",
    description: "This will sort subscribers and non-subscribers."
  },
}

