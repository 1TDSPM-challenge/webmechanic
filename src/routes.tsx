import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>
            },
            {
                path: "/equipe",
                element: <h1>Nossa Equipe</h1>
            },
            {
                path: "/contato",
                element: <h1>Contato</h1>
            },
        ],
    },
]);