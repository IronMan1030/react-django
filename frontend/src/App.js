import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import { theme } from "./theme";
import "./theme/global.css";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const engine = new Styletron();
  return (
    <div>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </div>
  );
}

export default App;
