import Ragistration from "../Ragistrationpage/Ragistration";
import Loginform from "../Loginpage/Loginform";
import ForgetPassword from "../ForgetPassWordpage/ForgetPassword";

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
    path:"/ForgetPassWord",
    element:<ForgetPassword />,

  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  }
];

export default MyRoutes;
