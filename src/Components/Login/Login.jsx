 import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import auth from "../../firebase/firebase.config";




const Login = () => {
  const[success,setSuccess]=useState('');
  const[errormessage,setErrormessage]= useState('');
  
 const handelLogin = e =>{
  e.preventDefault();
  const email=e.target.email.value;
const password=e.target.password.value;

console.log(email,password);
setSuccess('');
setErrormessage('');


if (password.length < 6) {
  setErrormessage('Password should be at least 6 characters');
  return;
}
else if(!/[A-Z]/.test(password)) 
  {
    setErrormessage('Password must have 8 digit  at least one Uppercase Character');
    return;
   }

// validation


signInWithEmailAndPassword(auth, email, password)
.then(result=>{
 console.log(result.user);
 setSuccess('User created successfully');
})
.catch(error=>{
  console.log(error);
  setErrormessage(error.message);

})
  }
 
    return (
      <div>
      <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
<h1 className="text-5xl font-bold">LOGIN  Now!</h1>
<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={ handelLogin}  className="card-body">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
    <label className="label">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>
  <div className="form-control mt-6">
    <button  className="btn btn-primary">Login</button>
  </div>
</form>
 
{
    success &&<p className="right-3 py-3 font-serif text-center text-green-600"> {success} </p>
}
{
    errormessage && <p className= "right-3 py-3 font-serif text-center text-red-600">{errormessage} </p>
}
</div>
</div>
</div>
  </div>
    );
};

export default Login;