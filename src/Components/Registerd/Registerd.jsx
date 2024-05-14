import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const Registerd = () => {
// success massge er jonno state declear korci 
    const[success,setSuccess]=useState('')
    // same email thakle error  massage  er jonno state declear korci 
    const[errormassage,setErrormassage]= useState('')



 const handelregister= e =>{
    //  e.preventDefault();  er kaj hocche  from ta jkn submit krba thon page ta jano reload na kre 
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
console.log(email,password);
// setSuccess ar setErrormassage clean howar jonne 
setSuccess('');
setErrormassage('');

createUserWithEmailAndPassword(auth, email, password)

.then(result=>{

console.log(result.user);
setSuccess('User created successfully');
})
.catch(error=>{
    console.log(error,'DONOT RIGHT EMAIL AND PASSWORD');
    setErrormassage('user alreday exists');
})
 }


    return (
        <div className="card-body">
    <form onSubmit={handelregister} className="max-w-sm mx-auto ">
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:for-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter email" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input placeholder="Enter  password" type="password" name="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:for-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>

  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-pink-600 hover:underline dark:text-pink-500">terms and conditions</a></label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:md:hover:bg-fuchsia-600">Register new account</button>
</form>
{/* 
* jodi state e success thake thole amke User created successfully dekhao
*jodi state e akie email  thake thole amke User alreday created Same Email  dekhao
 */}
{
    success &&<p className="right-3 py-3 font-serif text-center text-green-600">  User created successfully</p>
}

{
    errormassage && <p className= "right-3 py-3 font-serif text-center text-red-600">User alreday created Same Email </p>
}

        </div>
      
    );
};

export default Registerd