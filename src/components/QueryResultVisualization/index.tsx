import AutoComplete from "../Autocomplete";
import QueryResultChart from "../QueryResultChart";
import { useQueryResultVisualization } from "./operations";

const QueryResultVisualization = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  const {
    formValues,
    formErrors,
    handleInputChange,
    handleSubmit,
    chartTypes,
    onOptionSelection,
    isVisualizationOpen,
  } = useQueryResultVisualization();
  return (
    <>
      {!isVisualizationOpen && (
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="login-heading">
              <h2 className="text-xl p-3">Query Visualization</h2>
            </div>

            <div className="flex mt-3">
              <div className="">
                <AutoComplete
                  suggestions={chartTypes}
                  placeholder="Chart Type..."
                  onOptionSelection={onOptionSelection}
                />
                {formErrors?.type && (
                  <div className="text-(--highlight-color)">
                    {formErrors?.type}
                  </div>
                )}
              </div>
              <div className="ml-4">
                <AutoComplete
                  suggestions={chartTypes}
                  placeholder="X Axis..."
                  onOptionSelection={onOptionSelection}
                />
                {formErrors?.xAxisData && (
                  <div className="text-(--highlight-color)">
                    {formErrors?.xAxisData}
                  </div>
                )}
              </div>

              <div className="ml-4">
                <AutoComplete
                  suggestions={chartTypes}
                  placeholder="Y Axis..."
                  onOptionSelection={onOptionSelection}
                />
                {formErrors?.yAxisData && (
                  <div className="text-(--highlight-color)">
                    {formErrors?.yAxisData}
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

      {isVisualizationOpen && <QueryResultChart option={option} />}
    </>
  );
};

export default QueryResultVisualization;
