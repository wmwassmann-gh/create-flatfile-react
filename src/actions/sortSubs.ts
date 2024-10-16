import api from "@flatfile/api";
import { FlatfileEvent, FlatfileListener } from "@flatfile/listener";

export default function flatfileEventListener(listener: FlatfileListener) {
  listener.on(
    "job:ready",
    { job: "sheet:created" },
    async (event: FlatfileEvent) => {
      const {
        context: { jobId },
      } = event;
      try {
        await api.jobs.ack(jobId, {
          info: "Getting started.",
          progress: 10,
        });

        // Do your work here

        await api.jobs.complete(jobId, {
          info: "JOB'S DONE.",
        });
      } catch (error) {
        console.error("Error:");

        await api.jobs.fail(jobId, {
          info: "I can't build there.",
        });
      }
    }
  );
}