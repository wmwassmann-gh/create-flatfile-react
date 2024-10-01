import api, { Flatfile } from "@flatfile/api";
import type { FlatfileEvent, FlatfileListener } from "@flatfile/listener";
import { bulkRecordHook } from "@flatfile/plugin-record-hook";
import { responseRejectionHandler } from "@flatfile/util-response-rejection";
import axios from "axios";



export default function flatfileEventListener(listener: FlatfileListener) {
    listener.on(
        "job:ready",
        { job: "space:configure" },
        async ({ context: { spaceId, environmentId, jobId } }) => {
            try {
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