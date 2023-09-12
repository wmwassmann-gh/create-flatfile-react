import React, { Dispatch, SetStateAction, useState } from "react";
import { ISpace, useSpace } from "@flatfile/react";

const spaceProps: ISpace = {
  name: "Embedded Space",
  // to test locally add your local vars here
  publishableKey: "pk_3d34f9821645462ca869cc69a9258ef5",
  environmentId: "us_env_Eqdlko0r",
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
    <div className="content">
      <h2>
        <code>&lt;Flatfile /&gt;</code>
      </h2>
      <p>Embed Flatfile in just a few lines of code.</p>
      <button
        className="contrast"
        onClick={() => {
          setShowSpace(!showSpace);
        }}
      >
        {showSpace === true ? "Close" : "Open and create new"} Space
      </button>
      {showSpace && <Space setShowSpace={setShowSpace} />}
    </div>
  );
}
