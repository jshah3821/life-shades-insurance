import { lazy, Suspense, useState, useEffect } from "react";
import Loader from "../components/layout/Loader";
import NoInternet from "../Pages/NoInternet";
import "../app.scss";
import { gapi } from "gapi-script";

function App() {
  const ReduxContainer = lazy(() => import("./ReduxContainer"));
  const [internet, setInternet] = useState(navigator.onLine);
  const clientId =
    "184488120753-obvs8d66gth0s2d9aoefqid2080t4m47.apps.googleusercontent.com";

  useEffect(() => {
    setInternet(navigator.onLine);
  }, [navigator.onLine]);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ client_id: clientId });
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {internet ? <ReduxContainer /> : <NoInternet />}
    </Suspense>
  );
}

export default App;
