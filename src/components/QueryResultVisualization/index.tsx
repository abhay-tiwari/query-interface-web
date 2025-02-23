import React from "react";
import AutoComplete from "../Autocomplete";
import QueryResultChart from "../QueryResultChart";
import { useQueryResultVisualization } from "./operations";

export type VisualizationDataProps = {
  rows?: any[];
  visualizationData: any[];
};

const QueryResultVisualization = ({
  rows,
  visualizationData,
}: VisualizationDataProps) => {
  const {
    formErrors,
    formValues,
    handleSubmit,
    chartTypes,
    xAxisOptions,
    yAxisOptions,
    onOptionSelection,
    isVisualizationOpen,
    xAxisItems,
    yAxisItems,
  } = useQueryResultVisualization(visualizationData, rows);
  return (
    <>
      {!isVisualizationOpen && chartTypes?.length > 0 && (
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div>
              <h2 className="text-xl p-3">Query Visualization</h2>
            </div>

            <div className="flex mt-3">
              <div className="">
                <AutoComplete
                  suggestions={chartTypes}
                  placeholder="Chart Type..."
                  onOptionSelection={(value) => {
                    onOptionSelection("type", value);
                  }}
                />
                {formErrors?.type && (
                  <div className="text-(--highlight-color)">
                    {formErrors?.type}
                  </div>
                )}
              </div>
              {xAxisOptions.length > 0 && (
                <div className="ml-4">
                  <AutoComplete
                    suggestions={xAxisOptions}
                    placeholder="X Axis..."
                    onOptionSelection={(value) =>
                      onOptionSelection("xAxisData", value)
                    }
                  />
                  {formErrors?.xAxisData && (
                    <div className="text-(--highlight-color)">
                      {formErrors?.xAxisData}
                    </div>
                  )}
                </div>
              )}
              <div className="ml-4">
                {yAxisOptions.length > 0 && (
                  <div>
                    <AutoComplete
                      suggestions={yAxisOptions}
                      placeholder="Y Axis..."
                      onOptionSelection={(value) => {
                        onOptionSelection("yAxisData", value);
                      }}
                    />
                    {formErrors?.yAxisData && (
                      <div className="text-(--highlight-color)">
                        {formErrors?.yAxisData}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="form-footer mt-3">
              <button
                className="bg-(--primary-bg) text-(--primary-color) px-5 py-2 border border-(--primary-color) rounded-lg mt-5 transition-all hover:bg-(--primary-color) hover:cursor-pointer hover:text-(--primary-text) focus:bg-(--primary-color) focus:text-(--text-primary) focus:cursor-pointer"
                type="submit"
              >
                Render Visual
              </button>
            </div>
          </form>
        </div>
      )}

      {isVisualizationOpen && xAxisItems && yAxisItems && formValues?.type && (
        <QueryResultChart
          xAxisItems={xAxisItems}
          yAxisItems={yAxisItems}
          chartType={formValues?.type}
        />
      )}
    </>
  );
};

export default QueryResultVisualization;
