// In here I'll want to listen for the jobs
// Pass that to sortSubs or whatever needs it for actions

import { FlatfileEvent, FlatfileListener } from "@flatfile/listener";
import api, { Flatfile } from "@flatfile/api";

// import { FlatfileEvent } from "@flatfile/listener";
import { Flatfile } from "@flatfile/api";



export type ActionSpec = {
    blueprint: Flatfile.Action;
    // handler: (event: FlatfileEvent, job: Flatfile.Job) => any;
    // partHandler?: (event: FlatfileEvent, job: Flatfile.Job) => any;
    // partsCompletedHandler?: (event: FlatfileEvent, job: Flatfile.Job) => any;
};
  


const sortRecords = async (event: FlatfileEvent, to: string) => {
    const { sheetId, workbookId, jobId } = event.context;

    try {
        const { data: sheets } = await api.sheets.list({ workbookId });
        const destinationSheet = sheets.find((sheet) => sheet.config?.slug === to);
        const { records } = await event.data;

     
    }

}