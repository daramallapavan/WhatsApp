import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import OpenChat from "../components/OpenChat";
import ViewProfile from "../components/ViewProfile";
import Updates from "../components/Updates";
import Communities from "../components/Communities";
import Calls from "../components/Calls";
import HomeChat from "../components/HomeChat";
import Settings from "../components/Settings/Settings";
import Account from "../components/Settings/Account";




const router=createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"home",
                element: <Home/>,
                children: [
                    {
                        path:"updates",
                        element: <Updates/>
                    },
                    {
                        path: "chats",
                        element:<HomeChat/>
                    },
                    {
                        path:"communities",
                        element: <Communities/>
                    },
                    {
                        path: "calls",
                        element: <Calls/>
                    }
                ]
            },
            {
                path:"openChat",
                element: <OpenChat/>
            },
            {
                path: "viewProfile",
                element: <ViewProfile/>
            },
            {
                path: "settings",
                element:<Settings/>
            },
            {
                path: "account",
                element:<Account/>
            }
        ]
    }
])

export default router;