import Header from "./components/Header";
import Footer from "./components/Footer";
import { publicRoutes, privateRoutes } from "./routes";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import DefaultPage from "./pages/Default";

function App() {
  const isAuthenticated = false; // replace with auth state from redux

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
