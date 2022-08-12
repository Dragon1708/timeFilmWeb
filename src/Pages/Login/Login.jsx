import React from "react";

import { Link} from "react-router-dom";

import "./Login.scss";

export default function Login() {
 
  return (
    <section className="Login">
       <Link to="/">Home</Link>
    <div className="Register__wrapper">
    <form className="CommentsWrite">
  {/* <form className="post-edit" ref="commentForm" onSubmit={this.processComment}> */}
       <input className="Register__text-input" placeholder="email" />
       <input className="Register__text-input" placeholder="password" />
         
          <button id="submit" type="submit" className="CommentsWrite__submit-btn">
            Login</button>
      </form>
    </div>
    </section>
  );
}
