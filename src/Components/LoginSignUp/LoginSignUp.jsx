import { useState } from "react";


export const LoginSignUp = () => {

  const [signIn, setSignIn] = useState({
    name: "",
    password: "",
    location: "",
    interests: [],
    image: "",
    subscribed: [],
  });

  const handleSignup = ({ name, value }) => {
    setSignIn({ ...signIn, [name]: value });
  };

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => { }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleSignup(event.target) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { handleSignup(event.target)}}
          required
        />
        <br />
        <select value={signIn.location} className="location" name="location" onChange={(event) => {handleSignup(event.target)}}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => { }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(event) => { }} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(event) => { }} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(event) => { }} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(event) => { }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(event) => { }} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {handleSignup(event.target) }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      
      <form className="login" onSubmit={(e) => { }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
