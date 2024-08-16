import {useState} from 'react'
const Form=()=>{
    const [userName,setUserName]=useState("")
    const [newUserDetails,setNewUserDetails]=useState()

    const getUserName=(event)=>{
        setUserName(event.target.value)
        }

    const userDetails=()=>{
        setNewUserDetails(userName)
        }

    return(

            <section className="FormSection">
                <h3>{newUserDetails}</h3>
            <div className="Input">
                <input type="text" placeholder="Enter your name" onChange={getUserName}/>
                <br/>
                <button onClick={userDetails}>Submit</button>
                </div>
                </section>
        )
    }
export default Form;