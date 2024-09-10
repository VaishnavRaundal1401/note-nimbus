import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:'', password:''});
    let history = useNavigate();
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success)
            {
                //save the authToken and redirect
                localStorage.setItem('token', json.authToken);
                props.showAlert('Logged in succcessfully', 'success');
                history("/home");
            }
            else{
                props.showAlert('Invalid Credentials', 'danger');
            }
    }
    const onChange =(e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className='container col-md-4' style={{border:'2px solid gray' ,borderRadius:'10px', padding:'10px 20px', marginTop:'7rem'}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="my-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" value={credentials.email} name='email' aria-describedby="emailHelp" autoComplete='username' onChange={onChange}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} autoComplete='current-password' name='password' id="password" onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login
