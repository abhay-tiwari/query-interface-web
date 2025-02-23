import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import QueryResultTable from "../QueryResultTable";
import QueryResultVisualization from "../QueryResultVisualization";

export type QueryResultProps = {
  rows?: any[];
  headers?: string[];
  visualizationData?: any[];
};

const QueryResult = ({
  headers,
  rows,
  visualizationData,
}: QueryResultProps) => {
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
            {visualizationData && visualizationData.length > 0 ? (
              <QueryResultVisualization
                visualizationData={visualizationData}
                headers={headers}
                rows={rows}
              />
            ) : (
              <div className="text-center py-8">
                No Data Available for Visualization.
              </div>
            )}
          </TabPanel>
        </Tabs>
      ) : (
        <div className="text-center">Execute Query to see Data.</div>
      )}
    </>
  );
};

export default QueryResult;
