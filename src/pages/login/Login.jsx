import React from 'react';
import "./Login.css";

export default function Login() {

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Tuatter</h3>
          <span className="loginDesc">それでも地球は、回っている。</span>
          </div>
          <div className="loginRight"> 
            <div className="loginBox">
              <p className="loginMsg">ログインはこちら</p>
              <input type="text" className='loginInput' placeholder='Email' />
              <input type="text" className='loginInput' placeholder='Password' />
              <button className="loginButton">Login</button>
              <span className='loginForgot'>パスワードをお忘れですか？</span>
              <button className="loginRegisterButton">アカウント作成</button>
            </div>
          </div>
      </div>
    </div>
  );
}
