import React from "react";
import { Link} from "react-router-dom";

import "./Register.scss";

export default function Register() {
 
  return (
    <section className="Register">
       <Link to="/">Home</Link>
    <div className="Register__wrapper">
    <form className="CommentsWrite">
  {/* <form className="post-edit" ref="commentForm" onSubmit={this.processComment}> */}
  <input className="Register__text-input" placeholder="image" />
       <input className="Register__text-input" placeholder="login" />
       <input className="Register__text-input" placeholder="email" />
       <input className="Register__text-input" placeholder="password" />
         
          <button id="submit" type="submit" className="CommentsWrite__submit-btn">
            Register</button>
      </form>
    </div>
    </section>
  );
}
