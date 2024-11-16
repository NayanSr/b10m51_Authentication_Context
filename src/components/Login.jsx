import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const {signinUser,signInWithGoogle}= useContext(AuthContext);
    const navigate= useNavigate();

    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signinUser(email,password)
        .then(result=>{
          console.log(result.user.email);
          e.target.reset();
          navigate('/')
        })
        .catch(error=>{
          console.log(error.message);
        })
        console.log( email, password);
    }

    const handlegoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        console.log(result.user);
        navigate('/')
      })
      .catch(error=>{
        console.log(error.message);
      })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLoginSubmit} className="card-body">
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="email"
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
            <button className="btn btn-primary">Login</button>
          </div>
          <p>
           New user? please  <Link to="/register">Register</Link>
          </p>
          <button onClick={handlegoogleSignIn} className="btn btn-primary">Google</button>
        </form>
      </div>
    </div>
    );
};

export default Login;