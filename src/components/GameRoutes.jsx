import { Route } from "react-router-dom";
import GamesList from "../views/Games/GamesList";
import GamePage from "../views/Games/GamePage";

const GameRoutes = () => {
    const routes = [
        {
            path: "/games",
            element: <GamesList />,
        },
        {
            path: "/game/:gameId",
            element: <GamePage />,
        },
    ];

    return <Route path="/games" element={<GamesList />} />
};

export default GameRoutes;