import React, { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";



const SignUp = () => {
    const {createUser}=useContext(AuthContext)

    const handleSignUp=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const userData={email,password}
        createUser(email,password)
        .then(result=>{
          console.log(result.user)
          const createTime=result.user?.metadata?.creationTime
          // Insert User Data to mongoDB
          const user={email,createTime}
          fetch('http://localhost:5000/user',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
        })
        .catch(error=>console.log(error))
        console.log(userData);
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SignUp now!</h1>
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
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
