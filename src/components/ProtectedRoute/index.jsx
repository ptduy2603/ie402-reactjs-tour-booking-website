import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, redirectPath, isSafe }) {
  return <>{isSafe ? children : <Navigate to={redirectPath} replace />}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string.isRequired,
  isSafe: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
