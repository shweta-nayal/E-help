import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8">
        <h1> Login </h1>
      <form action="">
        <div>
        <input type="email" />
        <label htmlFor=""> Your Email </label>
      </div>
      <div>
        <input type="password" />
        <label htmlFor=""> Your Password </label>
      </div>
      
      <div>
        <div>
            <input type="checkbox" />
            <label htmlFor="Remember Me"> </label>
        </div>

        <span> Forgot Password..??</span>
      </div>

        <button type="submit">Login</button>
        <div>
            <span>New Here..?? 
                {/* <Link to='Register'>Create an Account</Link> */}
                </span>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
