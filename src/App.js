import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

const StCenterWrapper = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  background-color: red;
`;

export default App;
