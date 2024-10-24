import api from "@flatfile/api";
// import { FlatfileEvent } from "@flatfile/listener";
import { ActionSpec } from "../plugins/jobs";

export const sortSubs: ActionSpec = {
  blueprint: {
    operation: "sort-subs",
    mode: "foreground",
    label: "Sort Subscribers",
    description: "This will sort subscribers and non-subscribers."
  },
  handler: async (event, job) => {
    const { spaceId, sheetId, workbookId, jobId } = event.context;
    // possibly more    
    try { 
      console.log("Good here");

    } catch (error) {
      const message = "Error happened";


      await api.jobs.fail(job.id, { outcome: { message }});
    }
  
  }
}


