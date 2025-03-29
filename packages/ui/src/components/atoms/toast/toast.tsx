import { toast, ToastContent, TypeOptions } from "react-toastify";

export function toastInvoker<TData = unknown>(
  content: ToastContent<TData>,
  type: TypeOptions,
) {
  return toast(content, {
    autoClose: 3000,
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type,
  });
}
