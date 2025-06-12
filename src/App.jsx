import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeMain from "./pages/HomeMain";
import DashBoard from "./pages/DashBoard";
import Compare from "./pages/ComparePage";
import WatchList from "./pages/WatchList";
import CoinPage from "./pages/CoinPage";
import ComparePage from "./pages/ComparePage";
import { Provider } from "react-redux";
import { store } from "./store/Store";

function App() {
  return (
    <div>
      {/* <HomeMain /> */}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
