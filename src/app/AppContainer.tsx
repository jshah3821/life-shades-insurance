import AppLayout from "../components/layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import { HOME_PAGE } from "../../src/routing/routes";

import LandingPage from "../Pages/LandingPage";

const AppContainer = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={HOME_PAGE} element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default AppContainer;
