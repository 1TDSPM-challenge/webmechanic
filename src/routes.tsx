import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Apolice from "./pages/Apolice";
import Seguros from "./pages/Seguros";
import Sinistros from "./pages/Sinistros";
import Equipe from "./pages/Equipe";
import Contato from "./pages/Contato";
import Erro from "./pages/Erro";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "perfil", element: <Perfil /> },
            { path: "apolice", element: <Apolice /> },
            { path: "seguros", element: <Seguros /> },
            { path: "sinistros", element: <Sinistros /> },
            { path: "equipe", element: <Equipe /> },
            { path: "contato", element: <Contato /> },
        ],
        errorElement: <Erro />,
    },
]);