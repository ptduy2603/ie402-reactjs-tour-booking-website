import Header from "./Header";
import Footer from "./Footer";
import { publicRoutes, privateRoutes } from "../routes";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DefaultPage from "../pages/Default";

function App() {
  const isAuthenticated = false; // get user's token from redux

  return (
    <>
      <Header />
      <main className="app">
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route?.path}
              path={route?.path}
              element={<route.component />}
            />
          ))}
          {privateRoutes.map((route) => (
            <Route
              key={route?.path}
              path={route?.path}
              element={
                <ProtectedRoute isSafe={isAuthenticated} redirectPath="/login">
                  {<route.component />}
                </ProtectedRoute>
              }
            />
          ))}
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
