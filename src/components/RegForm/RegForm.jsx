import { useState } from "react"
import React from "react"
import "../RegForm/RegForm.css"
import { validatePassword,checkPasswordMatch } from "./Validators";

export default function RegForm(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("")
    const[passwordMatch,setPasswordMatch] = useState(true)


    const handleNameChange = (event)=>{
        const newName = event.target.value
        setName(newName)
    };
    const handleEmailChange = (event)=>{
        const newEmail = event.target.value
        setEmail(newEmail)
    };
    const handlePasswordChange = (event)=>{
        const newPassword = event.target.value
        setPassword(newPassword)
        setIsPasswordValid(validatePassword(newPassword))
        setPasswordMatch(checkPasswordMatch(newPassword,confirmPassword))
    };
    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword)
        setPasswordMatch(checkPasswordMatch(password,newConfirmPassword))
    }


    return(
        <div className="section">
          <h1>Form Registration</h1>
         <form className="Form" >
            <input type="text" placeholder="Name" onChange={handleNameChange} />
            <input type="email" placeholder="email" onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />

            {!isPasswordValid && (<div className="error-message">The password must consist of Latin letters and digits, and be at least 8 characters long.</div>)}
         

            <input type="password" placeholder="Confirm password." value={confirmPassword} onChange={handleConfirmPasswordChange}/>
            {!passwordMatch && (<div className="error-message">Passwords do not match.</div>)}
            
            <select>
                <option value="">The end date of the academic year :</option>
                <option value="">2000</option>
            </select>
            <button style={{background:"Blue",color:"white"}} type="submit">Send</button>
            <button style={{background:"lightGreen",color:"white"}} type="reset">Clear Form</button>

            <div className="error-message">Check the form field completion.</div>
         </form>


        </div>
    )
}