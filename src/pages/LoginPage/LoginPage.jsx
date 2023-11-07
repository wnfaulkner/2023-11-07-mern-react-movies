import { useState } from "react";

export default function LoginPage(props) {
  const [loginFormData, setLoginFormData] = useState({
    userName: "",
  });

  function handleLogin(evt) {
    evt.preventDefault();
    props.setUser({ userName: loginFormData.userName, userLoggedIn: true });
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>Username: </label>
        <input
          name="userName"
          type="text"
          value={loginFormData.userName}
          onChange={(evt) =>
            setLoginFormData({
              ...loginFormData,
              [evt.target.name]: evt.target.value,
            })
          }
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
