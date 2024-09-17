import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserRoute from "./UserRoute";
import CashIn from "../Pages/CashIn/CashIn";
import Overview from "../Pages/Overview/Overiew";
import CashInRequest from "../Pages/Agent/CashInRequest";
import AgentRoute from "./AgentRoute";
import AdminRoute from "./AdminRoute";
import Notifications from "../Pages/Notifications/Notifications";
import PrivateRoute from "./PrivateRoute";
import Management from "../Pages/Admin/Management/Management";
import SendMoney from "../Pages/SendMoney/SendMoney";
import CashgOut from "../Pages/CashOut/CashgOut";
import Transactions from "../Pages/Transactions/Transactions";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/overview",
              element: <Overview />,
            },
            {
              path: "/transactions",
              element: <Transactions />,
            },
            {
              path: "/sendMoney",
              element: <SendMoney />,
            },
            {
              path: "/cashOut",
              element: <CashgOut />,
            },
            {
              path: "/cashIn",
              element: (
                <UserRoute>
                  <CashIn />
                </UserRoute>
              ),
            },
            {
              path: "/cashInReq",
              element: (
                <AgentRoute>
                  <CashInRequest />
                </AgentRoute>
              ),
            },
            {
              path: "/dashboard/admin",
              element: (
                <AdminRoute>
                  <Management />
                </AdminRoute>
              ),
            },
            {
              path: "/notifications",
              element: (
                <PrivateRoute>
                  <Notifications />
                </PrivateRoute>
              ),
            },
          ],
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path:  '/register',
        element: <Register/>

    }
  ]);


export default  router;
