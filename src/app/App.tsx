import { lazy, Suspense, useState, useEffect } from "react";
import Loader from "../components/layout/Loader";
import NoInternet from "../Pages/NoInternet";
import "../app.scss";
import { ToastContainer } from "react-toastify";

function App() {
  const RouterContainer = lazy(() => import("./RouterContainer"));
  const [internet, setInternet] = useState(navigator.onLine);

  useEffect(() => {
    setInternet(navigator.onLine);
  }, [navigator.onLine]);

  return (
    <Suspense fallback={<Loader />}>
      {internet ? (
        <>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <RouterContainer />
        </>
      ) : (
        <NoInternet />
      )}
    </Suspense>
  );
}

export default App;
