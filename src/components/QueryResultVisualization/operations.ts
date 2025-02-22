import { useState } from "react";

export type VisualizationFormValues = {
  type?: string;
  xAxisData?: any[];
  yAxisData?: any[];
};

export type VisualizationFormErrors = {
  type?: string;
  xAxisData?: string;
  yAxisData?: string;
};

export const useQueryResultVisualization = () => {
  const [formValues, setFormValues] = useState<VisualizationFormValues>();
  const [formErrors, setFormErrors] = useState<VisualizationFormErrors>();
  const [isVisualizationOpen, setIsVisualizationOpen] =
    useState<boolean>(false);
  const chartTypes = ["Line", "Bar", "Area"];

  const handleInputChange = () => {};

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

  const onOptionSelection = () => {};

  return {
    formValues,
    formErrors,
    handleInputChange,
    handleSubmit,
    chartTypes,
    onOptionSelection,
    isVisualizationOpen,
  };
};
