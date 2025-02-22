import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import QueryResultTable from "../QueryResultTable";
import QueryResultVisualization from "../QueryResultVisualization";

export type QueryResultProps = {
  rows?: any[];
  headers?: string[];
};

const QueryResult = ({ headers, rows }: QueryResultProps) => {
  return (
    <>
      {headers && headers.length > 0 ? (
        <Tabs>
          <TabList>
            <Tab>Table</Tab>
            <Tab>Chart</Tab>
          </TabList>

          <TabPanel>
            <QueryResultTable headers={headers} rows={rows} />
          </TabPanel>
          <TabPanel>
            <QueryResultVisualization />
          </TabPanel>
        </Tabs>
      ) : (
        <div className="text-center">Execute Query to see Data.</div>
      )}
    </>
  );
};

export default QueryResult;
