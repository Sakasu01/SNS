import React from 'react';
import "./Register.css";

export default function Register() {

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Tuatter</h3>
          <span className="loginDesc">それでも地球は、回っている。</span>
          </div>
          <div className="loginRight"> {/*コメントアウト*/}
            <div className="loginBox"> 
              <p className="loginMsg">新規登録はこちら</p>
              <input type="text" className='loginInput' placeholder='User Name' />
              <input type="text" className='loginInput' placeholder='Email' />
              <input type="text" className='loginInput' placeholder='Password' />
              <input type="text" className='loginInput' placeholder='Confirm Password' />
              <button className="loginButton">Sign Up</button> 
              <button className="loginRegisterButton">Login</button>
            </div>
          </div>
      </div>
    </div>
  );
}
