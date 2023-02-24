import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Payment from "./components/Payment/Payment";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Menu/>}/>
        <Route path="/:nhomdv">
          <Route index element={<Menu/>}/>
          <Route path=":dichvu" element={<Payment/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
