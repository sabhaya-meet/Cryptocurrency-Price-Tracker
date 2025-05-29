import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeMain from "./pages/HomeMain";
import DashBoard from "./pages/DashBoard";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <div>
      {/* <HomeMain /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
