import { FlatfileListener, FlatfileEvent } from "@flatfile/listener";
import api from "@flatfile/api";

export default function flatfileEventListener(listener: FlatfileListener) {
    listener.on(
        "job:ready",
        { job: "sheet:count-sub-records" },
        async ({ context: { jobId } }: FlatfileEvent) => {
          try {
            await api.jobs.ack(jobId, {
              info: "Getting started.",
              // "progress" value must be a whole integer
              progress: 10,
              estimatedCompletionAt: new Date("Tue Aug 23 2023 16:19:42 GMT-0700"),
            });
      
            // Do your work here

            console.log("hello there I'm a listener, bawk bawk bawk")
      
            await api.jobs.complete(jobId, {
              info: "This job is now complete.",
            });
          } catch (error) {
            console.error("Error:");
      
            await api.jobs.fail(jobId, {
              info: "This job did not work.",
            });
          }
        }
      );
}