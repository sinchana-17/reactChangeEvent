import {useState} from 'react'

 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Form=()=>{
    const [userName,setUserName]=useState("")
    const [newUserDetails,setNewUserDetails]=useState()
    const notify = () => toast("Successfully completed!");

    const getUserName=(event)=>{
        setUserName(event.target.value)
        }

    const userDetails=()=>{
        setNewUserDetails(userName)
        notify()
        }

    return(

            <section className="FormSection">
                <h3>{newUserDetails}</h3>
                <ToastContainer/>
            <div className="Input">
                <input type="text" placeholder="Enter your name" onChange={getUserName}/>
                <br/>
                <button onClick={userDetails}>Submit</button>
                </div>
                </section>
        )
    }
export default Form;