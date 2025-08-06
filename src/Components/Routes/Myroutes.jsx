import Ragistration from "../Ragistrationpage/Ragistration";
import Loginform from "../Loginpage/Loginform";

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
    path: "*",
    element: <div>404 Not Found</div>,
  }
];

export default MyRoutes;
