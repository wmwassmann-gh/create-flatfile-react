import { Flatfile } from "@flatfile/api";

export const nonSubscribers: Flatfile.SheetConfig = {
  name: "nonSubscriber",
  slug: "nonSub",
  fields: [
    {
      key: "subscriber",
      type: "boolean",
      label: "Non-Subscriber",
    },
  ],
};
