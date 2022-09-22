import React, {useState} from "react";
import "./ForgetPassword.css"
import Validation from '../Validation'



//funtion for login form
const ForgetPassword = ()=> {

    //set the satet for value inpute
    const [values, setValues] = useState({
        email: ""
    })
    
    //set state to manage errors
    const [errors, setErrors] = useState({});

    // fuction to handle change in event
    const handleChange = (event) => {
        setValues ({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    // set prevent default to prevent page for reloading
    const handleLoginSubmit = (event) =>{
        event.preventDefault();

        // manage errors
        setErrors(Validation(values));
    };
    return (
                <form className="form-header">
                    <h3 className="title">Forget Password</h3>
                    
                    <div className="email">
                        <label className="labe"> Email Address </label><br></br>
                        <input 
                           className="input" 
                           type="email" 
                           name="email"
                           placeholder="Email address"
                           required
                           value={values.email}
                           onChange={handleChange} 
                          />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    
                    <div>
                        <button className="submitBtn" onClick={handleLoginSubmit}>Submit</button>
                    </div>
                    <div>
                       <img src=""></img>
                    </div>
                 </form>
    );    
}
    
        


        export default ForgetPassword

    
    