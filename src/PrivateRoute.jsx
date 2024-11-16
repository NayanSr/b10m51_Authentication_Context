import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-11/12 bg-slate-400 mx-auto">
        <div className="w-24 mx-auto">
            <span className="loading loading-ring loading-lg">aaa</span>
        </div>
       
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
