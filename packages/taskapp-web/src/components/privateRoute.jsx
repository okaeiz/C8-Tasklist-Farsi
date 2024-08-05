import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children, authenticated, ...rest }) => {
  return authenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
