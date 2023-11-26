import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup(){
    const styles = {
        formContainer: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        form: {
          textAlign: "center",
        },
        label: {
          display: "block",
          marginBottom: "10px",
        },
        input: {
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        },
        button: {
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
        },
        link: {
          display: "block",
          marginTop: "10px",
          textDecoration: "none",
        },
      };

   const [name , setName]=useState()
   const [email ,setEmail]=useState()
   const [password , setPassword]=useState()
   const navigate = useNavigate()

   const handleSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/' , {name , email ,password})
    .then(result => {console.log(result)
        navigate('/login')
    })
    .catch(err => console.log(err))
   }
    
    return(
       <div className="form-container" style={styles.formContainer}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div className="mb-3">
                    <label htmlFor="email"  style={styles.label}>
                        <strong>Name</strong>
                    </label>
                    <input type="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    name="email"
                    className="form-contril rounded-w-100" 
                    onChange={(e) => setName(e.target.value)}
                     />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" style={styles.label}>
                        <strong>Email</strong>
                    </label>
                    <input type="email"
                    placeholder="Enter E-Mail"
                    name="email"
                    className="form-contril rounded-w-100" 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" style={styles.label}>
                        <strong>Password</strong>
                    </label>
                    <input type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="form-contril rounded-w-50" 
                    onChange={(e) => setPassword(e.target.value)}
                     />
                </div>
             <button type="submit" className="btn btn-success w-200 rounded-0">
                Register
             </button>
             </form>
             <h6>Already Have an Account</h6>
             <Link to="/login" className="btn btn-default border w-200 bg-light rounded-0 text-decoration-none" style={styles.link}>
              Login  
             </Link>
       
        </div>
    
    );
}

export default Signup