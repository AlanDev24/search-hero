import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Alan');

    navigate(lastPath, {
      replace: true,
    });

  };

  return (
    <>
      <div className="container mt-5">
        <h1>Log in</h1>
        <hr />

        <button className="btn btn-primary" onClick={onLogin}>
          Log in
        </button>
      </div>
    </>
  );
};
