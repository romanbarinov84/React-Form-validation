import { useState } from "react"
import React from "react"
import "../RegForm/RegForm.css"
import { validatePassword,checkPasswordMatch,checkRequiredFields } from "./Validators";

export default function RegForm(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("")
    const[passwordMatch,setPasswordMatch] = useState(true)
    const [selectedYear, setSelectedYears] = useState("")
    const [requiredFieldsError, setRequiredFieldsError] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const handleNameChange = (event)=>{
        setName(event.target.value)
    };
    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
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
    };
    const handleYearChange = (event) => setSelectedYears(event.target.value)
        
    

    const years = Array.from({length: 40}, (_,i) => new Date().getFullYear() - i);
   

    const handleSubmit = (event) => {
        event.preventDefault()

        const allFieldsField = checkRequiredFields([name,email,password,confirmPassword,selectedYear])
        const isFormValid = allFieldsField && isPasswordValid && passwordMatch;

        if(!isFormValid){
          setRequiredFieldsError(true)
          setShowSuccessMessage(false)
            return 

            
        }
        setRequiredFieldsError(false)
        setShowSuccessMessage(true)


         const formData = {
        name,email,password,confirmPassword,selectedYear
    }
     alert(JSON.stringify(formData,null,2));
    }

    const handleReset = () => {
        setName("")
        setEmail("")
        setPassword("")
        setIsPasswordValid("")
        setConfirmPassword("")
        setSelectedYears("")
    }

   
    return(
        <div className="section">
          <h1>Form Registration</h1>
         <form className="Form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={handleNameChange} />
            <input type="email" placeholder="email" onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />

            {!isPasswordValid && (<div className="error-message">The password must consist of Latin letters and digits, and be at least 8 characters long.</div>)}
         

            <input type="password" placeholder="Confirm password." value={confirmPassword} onChange={handleConfirmPasswordChange}/>
            {!passwordMatch && (<div className="error-message">Passwords do not match.</div>)}
            
            <select value={selectedYear} onChange={handleYearChange}>
               
                {years.map((year) => (
                     <option key={year.toString()} value={year}>The end date of the academic year :{year}</option>
                ))}
            </select>

            <button style={{background:"Blue",color:"white"}} type="submit">Send</button>
            <button style={{background:"lightGreen",color:"white"}} type="reset" onClick={handleReset}>Clear Form</button>
            {requiredFieldsError && (<div className="error-message">Check the form field completion.</div>)}
            {showSuccessMessage && (<div className="error-message">Message to be send</div>)}
         </form>


        </div>
    )
}