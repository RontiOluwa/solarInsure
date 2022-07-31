import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import Toast from "../types/Toast";

// Create Toast
const Toast = (mssg: string, Toasttype: Toast) => {
  createToast(mssg, {
    type: Toasttype,
  });
  return true;
};

export default Toast;
