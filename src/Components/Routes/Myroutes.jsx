import Ragistration from "../Ragistrationpage/Ragistration";
import Loginform from "../Loginpage/Loginform";
import ForgetPassword from "../ForgetPassWordpage/ForgetPassword";
import Dashboard from "../Dashboard/Dashboard";
import CreatBookRecord from "../CreatBookRecord/CreatBookRecord";
import UpdateBookrecord from "../UpdateBookrecord/UpdateBookrecord";
import SearchBookrecord from "../SearchBookrecord/SearchBookrecord";
import { Profiler } from "react";
import Profile from "../Profilepage/Profile";

const MyRoutes = [
  {
    path: "/login",
    element: <Loginform />,
  },
  {
    path: "/registration",
    element: <Ragistration />, // Note: lowercase 'element' (React Router v6+)
  },
  {
    path: "/",
    element: <Ragistration />,
  },
  {
    path: "/ForgetPassWord",
    element: <ForgetPassword />,

  },
  {
    path: "/Dashboard",
    element: <Dashboard />
 
  },
  {

    path: "/Dashboard/CreatBookRecord",
    element: <CreatBookRecord />

  }
  ,
  {
    path: "/Dashboard/UpdateBookrecord",
    element: <UpdateBookrecord />


  },
  {
    path:"/Dashboard/SearchBookrecord",
    element:<SearchBookrecord/>

  },
  {

      path:"/Dashboard/Profile",
      element:<Profile/>

  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  }
];

export default MyRoutes;
