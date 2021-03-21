import { Home } from "./pages/Home";
import { RegisterForm } from "./pages/RegisterForm/";
import { Results } from "./pages/Results";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/signUp",
    component: RegisterForm,
  },
{
    path: '/results',
    component: Results
}
];

export default routes;
