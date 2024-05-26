import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
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
