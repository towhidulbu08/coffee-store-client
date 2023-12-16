import React, { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const SignIn = () => {
  const {signInUser}=useContext(AuthContext)
    const handleSignIn=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value
        signInUser(email,password)
        .then(result=>{
          console.log(result.user);
          const user={
            email,
            lastSignInTime:result.user?.metadata?.lastSignInTime
          }
          console.log(user);
          fetch('http://localhost:5000/user',{
             method:"PATCH",
             headers:{
               'content-type':'application/json'
             },
             body:JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
        })
        .catch(error=>console.log(error))

    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign In now!</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignIn</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
