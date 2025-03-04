import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = (message: string, type: string = "success") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;

      case "error":
        toast.error(message);
        break;

      case "warning":
        toast.warning(message);
        break;

      case "info":
        toast.info(message);
        break;

      default:
        toast(message);
        break;
    }
  };

  return {
    showToast,
  };
};
