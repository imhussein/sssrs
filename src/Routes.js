import Home from "./client/components/Home";
import Users, { loadData } from "./client/components/Users";

export default [
  {
    ...Home,
    path: "/",
    exact: true
  },
  {
    ...Users,
    path: "/users",
    exact: true
  }
];
