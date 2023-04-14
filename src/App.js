import "./App.css";

import store from "./container/store";
import { Provider } from "react-redux";
import Myform from "./components/api/Myform";
import MyTable from "./components/api/MyTable";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditForm from "./components/api/EditForm";
import Header from "./components/api/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <><Myform /><MyTable/></>
  },
 
  {
    path: "/edit/:id",
    element: <EditForm />,
  },
]);

function App() {
  return (
    <div className="App">
      <h1 style={{ marginLeft: "700px" }}>Form</h1>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
