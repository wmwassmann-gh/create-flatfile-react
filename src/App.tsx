import React, { Dispatch, SetStateAction, useState } from "react";
import { ISpace, makeTheme, useSpace } from "@flatfile/react";
import { config } from "./config";
import { listener } from "./listener";

const spaceProps: ISpace = {
  name: "Embedded Space",
  // to test locally add your local vars here
  publishableKey: "",
  environmentId: "",
  workbook: config,
  themeConfig: makeTheme({ primaryColor: "#546a76", textColor: "#fff" }),
  sidebarConfig: {
    showDataChecklist: false,
    showSidebar: false,
  },
  listener: listener,
};

const Space = ({
  setShowSpace,
}: {
  setShowSpace: Dispatch<SetStateAction<boolean>>;
}) => {
  const space = useSpace({
    ...spaceProps,
    closeSpace: {
      operation: "contacts:submit",
      onClose: () => setShowSpace(false),
    },
  });
  return space;
};

export default function App() {
  const [showSpace, setShowSpace] = useState(false);

  return (
    <div style={{ padding: "16px" }}>
      <button
        onClick={() => {
          setShowSpace(!showSpace);
        }}
      >
        {showSpace === true ? "Close" : "Open"} space
      </button>
      {showSpace && <Space setShowSpace={setShowSpace} />}
    </div>
  );
}
