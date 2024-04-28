import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import BookPage from "./pages/BookPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: `${BOOK_ROUTE}/:id`,
        Component: BookPage
    },
]