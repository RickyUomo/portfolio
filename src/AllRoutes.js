import { Route, Routes } from "react-router-dom";
import pasgesData from "./constant/pagesData";

export const AllRoutes = () => {
  const pageRoutes = pasgesData.map(({ path, element, title }) => (
    <Route exact key={title} path={path} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};
