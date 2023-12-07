import routes from "../constants/routes";
import NotFound from "../page/not-found/NotFound";
import AuthGuard from "../../src/Guard/AuthGuard";
import { appPage } from "../App/Page/appPage";
import Home from "../page/home/Home";
import Movie from "../page/movie/Movie";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.movie,
    Component: Movie,
    Guard: AuthGuard,
  },
  {
    path: routes.signin,
    Component: appPage.SignIn,
  },
  {
    path: routes.signup,
    Component: appPage.SignUp,
  },
  {
    path: routes.profile,
    Component: appPage.Profile,
    Guard: AuthGuard,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
