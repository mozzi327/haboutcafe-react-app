import React from 'react'
import loginImg from '../../assets/login.svg'
import './Login.css'

function Login(props) {
  return (
    <div className="base-container" ref={props.containerRef}>
    <div className="content">
      <div className="image">
        <img src={loginImg} />
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn">
        Login
      </button>
    </div>
  </div>
  )
}

export default Login