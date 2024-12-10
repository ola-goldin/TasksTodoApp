import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./components/Home";
import { fetchTasksFromDB as loader } from "./api/tasks.api";
import ErrorBoundary from "./ui-components/ErrorBoundary";

const Loading = () => <h2 className="center">Loading...</h2>;
const ErrorPage = () => <h2 className="center">Oops! Something went wrong. Please try again later.</h2>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </Suspense>
    ),
    loader,
    errorElement: <ErrorPage />,
  },
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;
