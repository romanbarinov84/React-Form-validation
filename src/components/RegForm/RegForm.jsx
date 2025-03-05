import React from "react"
import "../RegForm/RegForm.css"

export default function RegForm(){
    return(
        <div className="section">
          <h1>Form Registration</h1>
         <form className="Form" >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="Password" />
            <div className="error-message">The password must consist of Latin letters and digits, and be at least 8 characters long.</div>
            <input type="password" placeholder="Confirm password." />
            <div className="error-message">Passwords do not match.</div>
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