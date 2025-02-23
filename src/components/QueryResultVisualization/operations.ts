import { useEffect, useState } from "react";

export type VisualizationFormValues = {
  type?: string;
  xAxisData?: string;
  yAxisData?: string;
};

export type VisualizationFormErrors = {
  type?: string;
  xAxisData?: string;
  yAxisData?: string;
};

export const useQueryResultVisualization = (
  visualizationData: any[],
  rows: any[],
  headers: string[]
) => {
  const [formValues, setFormValues] = useState<VisualizationFormValues>();
  const [formErrors, setFormErrors] = useState<VisualizationFormErrors>();
  const [isVisualizationOpen, setIsVisualizationOpen] =
    useState<boolean>(false);
  const [chartTypes, setChartTypes] = useState<string[]>([]);
  const [xAxisOptions, setXAxisOptions] = useState<string[]>([]);
  const [yAxisOptions, setYAxisOptions] = useState<string[]>([]);
  const [xAxisItems, setXAxisItems] = useState<string[]>([]);
  const [yAxisItems, setYAxisItems] = useState<string[]>([]);

  useEffect(() => {
    setChartTypes(visualizationData.map((x) => x.chartType));
  }, [visualizationData]);

  useEffect(() => {
    if (formValues?.type) {
      visualizationData.forEach((x) => {
        if (x.chartType === formValues.type) {
          setXAxisOptions(x.fields.xAxis);
          setYAxisOptions(x.fields.yAxis);
        }
      });
    }
  }, [formValues?.type]);

  useEffect(() => {
    if (!formValues?.xAxisData) {
      return;
    }

    let items: string[] = [];
    rows.forEach((row) => {
      if (formValues?.xAxisData) {
        items.push(row[formValues.xAxisData]);
      }
    });

    setXAxisItems(items);
  }, [formValues?.xAxisData]);

  useEffect(() => {
    if (!formValues?.yAxisData) {
      return;
    }

    let items: string[] = [];
    rows.forEach((row) => {
      if (formValues?.yAxisData) {
        items.push(row[formValues.yAxisData]);
      }
    });

    setYAxisItems(items);
  }, [formValues?.yAxisData]);

  const validate = () => {
    const formErrors: VisualizationFormErrors = {};

    if (!formValues?.type) {
      formErrors.type = "Type is required";
    }

    if (!formValues?.xAxisData) {
      formErrors.xAxisData = "X Axis Field is required";
    }

    if (!formValues?.yAxisData) {
      formErrors.yAxisData = "Y Axis Field is required";
    }

    setFormErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validate()) {
      setIsVisualizationOpen(true);
    }
  };

  const onOptionSelection = (key: string, value: string | undefined) => {
    if (!value) {
      return;
    }

    if (key === "type") {
      setFormValues({ ...formValues, type: value });
    } else if (key === "xAxisData") {
      setFormValues({ ...formValues, xAxisData: value });
    } else if (key === "yAxisData") {
      setFormValues({ ...formValues, yAxisData: value });
    }
  };

  return {
    formValues,
    formErrors,
    handleSubmit,
    chartTypes,
    xAxisOptions,
    yAxisOptions,
    onOptionSelection,
    isVisualizationOpen,
    xAxisItems,
    yAxisItems,
  };
};
