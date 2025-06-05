import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeMain from "./pages/HomeMain";
import DashBoard from "./pages/DashBoard";
import Compare from "./pages/Compare";
import WatchList from "./pages/WatchList";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <div>
      {/* <HomeMain /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
