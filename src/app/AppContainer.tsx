import AppLayout from "../components/layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import { HOME_PAGE, MEDICARE_PAGE } from "../../src/routing/routes";

import LandingPage from "../Pages/LandingPage";
import MediCare from "../Pages/MediCare";

const AppContainer = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={HOME_PAGE} element={<LandingPage />} />
        <Route path={MEDICARE_PAGE} element={<MediCare />} />
      </Route>
    </Routes>
  );
};

export default AppContainer;
