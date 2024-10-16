import { Flatfile } from "@flatfile/api";

export const subscribers: Flatfile.SheetConfig = {
  name: "Subscriber",
  slug: "sub",
  fields: [
    {
      key: "subscriber",
      type: "boolean",
      label: "Subscriber",
    },
  ],
};
