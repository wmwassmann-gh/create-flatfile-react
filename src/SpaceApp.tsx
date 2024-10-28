"use client";
import {
  useFlatfile,
  usePlugin,
  useEvent,
  useListener,
  Workbook,
  Space,
  Document,
  Sheet,
  FlatfileProvider,
} from "@flatfile/react";
//import api from "@flatfile/api";
import { useState } from "react";
import { recordHook } from "@flatfile/plugin-record-hook";
import { sheet } from "./sheets/sheet";
import { workbook } from "./sheets/subs/subWorkbook";
import { document } from "./sheets/document";
import Button from "./utils/Button";

export const SpaceApp = ({ publishableKey }: { publishableKey: string }) => (
  <FlatfileProvider
      publishableKey={publishableKey}
      config={{ displayAsModal: false, mountElement: "no-radius-iframe" }}
  >
      <SpaceConfig />
  </FlatfileProvider>
);

const SpaceConfig = () => {
  const { open, openPortal, closePortal } = useFlatfile();
  const [color, setColor] = useState("Red");
  const [records, setRecords] = useState([]);

  const toggleButton = () => {
      if (!open) {
          setRecords([]);
          openPortal();
      } else {
          closePortal();
      }
  };

  useListener((listener) => {
    listener.on("**", (event) => {
      console.log("SpaceApp useListener Event => ", {
        topic: event.topic,
        payload: event.payload,
      });
    });
  });

  useListener((listener) => {
    listener.on("job:ready", { job: "sheet:count-sub-records" }, (event) => {
      console.log("I DID IT", {
        topic: event.topic,
        payload: event.payload,
      })
    })
  })
 

  usePlugin(
      recordHook("sheet", (record, event) => {
          console.log("recordHook", { event });           
          return record;
      }),
      []
  );

  // This will close the Portal instance when you confirm the dialoy after the Workbook onSubmit function runs
  useEvent(
      "job:outcome-acknowledged",
      {
          operation: "workbookSubmitAction",
          status: "complete",
      },
      async (event) => {
          // any logic related to the event needed for closing the event
          console.log({ event });
          // close the portal iFrame window
          closePortal();
      }
  );




  return (
      <div className="content">
          {/*Button to trigger the modal */}
          <div>
              <h2>
                  The <pre className="inline">{`<Space />`}</pre> Component
              </h2>
              <p>
                  This example shows the Space, Document, Workbook and Sheet components
                  working together. Note the Space has a document in the sidebar that
                  can take any markdown as the body.
              </p>
              <div className="border-space">
                  <h4>Record Hook Plugin Configuration</h4>
                  <p>
                      {" "}
                      <i>
                          You can even change the logic of the listener code by updating the
                          color value with the buttons. By default, the color is "Red" but
                          you can click these buttons to toggle what the Record Hook plugin
                          will do on the next user edit.
                      </i>
                  </p>
                  <p>
                      The next Record change will set the <b>color</b> field to:{" "}
                      <pre className="inline">{color}</pre>
                  </p>
                  <button className="contrast" onClick={() => setColor("Blue")}>
                      Set Color to Blue
                  </button>
                  <button className="contrast" onClick={() => setColor("Green")}>
                      Set Color to Green
                  </button>
              </div>
              <div className="border-space">
                  <Button onClick={toggleButton}>
                      {open === true ? "Close" : "Open"} Portal
                  </Button>
              </div>
          </div>
          {records.length > 0 && (
              <div className="success">{records.length} Record Submitted!</div>
          )}
          <Space
              config={{
                  name: "Alex's Space",
                  metadata: {
                      userData: {
                          userName: "userName",
                      },
                      sidebarConfig: {
                          showSidebar: true,

                      },
                  },
              }}
          >
              <Document config={document} />
              <Workbook
                  config={workbook}
                  onSubmit={async ({ sheet }) => {
                      console.log("on Workbook Submit ", { sheet });
                      const { records } = await sheet.allData();
                      setRecords(records);
                  }}
                  onRecordHooks={[
                      [
                          (record) => {
                              record.set("email", "SHEET 1 RECORDHOOKS");
                              return record;
                          },
                      ],
                      [
                          (record) => {
                              record.set("email", "SHEET 2 RECORDHOOKS");
                              return record;
                          },
                      ],
                  ]}
              >
                  <Sheet
                      config={{
                          ...sheet,
                          slug: "Beep Beep, I'm a Sheet",
                          name: "Sheet ",
                      }}
                      onRecordHook={(record) => {
                          record.set("email", "Beep Beep, I'm a Sheet RECORDHOOK");
                          return record;
                      }}
                  />
              </Workbook>
          </Space>
      </div>
  );
};
