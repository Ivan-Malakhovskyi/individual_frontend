import { Route, Routes } from "react-router";
import { Nav } from "./components/Nav.jsx";

import GamesPage from "./pages/GamesPage.jsx";
import GameInfoPage from "./pages/GameInfoPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Nav />
            <h1>Home Page</h1>
          </>
        }
      />

      <Route path="about" element={<div>About</div>} />
      <Route path="games" element={<GamesPage />} />
      <Route path="games/:gameId" element={<GameInfoPage />} />
      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
