// import api from "@flatfile/api";
import { FlatfileListener } from "@flatfile/listener";
// import { recordHook } from "@flatfile/plugin-record-hook";

export const listener = FlatfileListener.create((listener) => {

  listener.on("**", (event) => {
    console.log("Event =>", event.topic);
  });


  // listener.on(
  //   "job:ready",
  //   { job: "workbook:count-sub-records" },
  //   async ({ context: { jobId } }) => {
  //     try {
  //       await api.jobs.ack(jobId, {
  //         info: "Getting started.",
  //         progress: 10,
  //       });
  //       // Make changes after cells in a Sheet have been updated
  //       console.log("Make changes here when an action is clicked");
    
  //     } catch (error) {
  //       console.error("Error:");

  //       await api.jobs.fail(jobId, {
  //         outcome: {
  //           message: "This job encountered an error.",
  //         },
  //       });
  //     }
  //   }
  // );
});