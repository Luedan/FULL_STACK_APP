import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./main.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./locale/i18n.ts";
import { ThinLineLoading } from "./components/ui/loading/thinLineLoading";
import { CustomThemeProvider } from "./providers/theme";
import { router } from "./router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
      <ToastContainer />
      <CustomThemeProvider>
        <Suspense fallback={<ThinLineLoading />}>
          <RouterProvider router={router} />
        </Suspense>
      </CustomThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
