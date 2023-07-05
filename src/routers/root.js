import { createBrowserRouter } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import MainPage from "../pages/MainPage";
import ListPage from "../pages/board/ListPage";

const router = createBrowserRouter([
    {
        path:"",
        element:<MainPage></MainPage>
    }
    ,
    {
        path:"about",
        element:<AboutPage></AboutPage>
    }
    ,
    {
        path:"board",
        // element:<div>Board</div>,
        children: [
            {
                path:"list",
                element:<ListPage></ListPage>
            }
        ]
    }

])

export default router;