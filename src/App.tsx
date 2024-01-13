import { BrowserRouter } from "react-router-dom";
import { CustomRoutes } from "./routes/CustomRoutes";
import { UseContextProvider } from "./Context/UseContextProvider";

function App() {
  return (
    <>
      <UseContextProvider>
        <BrowserRouter>
          <CustomRoutes />
        </BrowserRouter>
      </UseContextProvider>
    </>
  );
}

export default App;
