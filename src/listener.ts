import api from "@flatfile/api";
import type { FlatfileListener } from "@flatfile/listener";




export default function flatfileEventListener(listener: FlatfileListener) {

    listener.on("**", (event) => {
        console.log("Hardy Blargy", {
            topic: event.topic,
            payload: event.payload,
        });
    });
    listener.on(
        "job:ready",
        { job: "space:configure" },
        async ({ context: { spaceId, environmentId, jobId } }) => {
            try {
                console.log("Hello");
                await api.jobs.ack(jobId, {
                    info: "Getting Started",
                    progress: 10,
                });

                await api.spaces.update(spaceId, {
                    environmentId,
                    translationsPath: "https://raw.githubusercontent.com/FlatFilers/wmwassmann-gh/create-flatfile-react/locales/en/translation.json",
                });                   
               
            } catch (error: any) {
                console.error("Error:", error.stack);

                await api.jobs.fail(jobId, {
                    outcome: {
                        message: ":(",
                    },
                });
            }
        }
    )
};