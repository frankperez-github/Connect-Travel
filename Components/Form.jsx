import Image from 'next/image'
import { useState } from 'react';

function Form(){

   const [email, setEmail] = useState("")

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const res = await(fetch("https://connectravelsetup.com/subscriber/", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({email})}))
        const data = await(res.json())
        
        if (res.status==201){
            alert("You have subcribed succesfully")
           setEmail("")
           document.getElementById("Form-Page").style.display = "None"
        }
        else alert(data.email)
       
         
        
    }

    function Close (){
        document.getElementById('Form-div').style.display="none";
        document.getElementById('Form-Page').style.display="none";
    }

    return(

        <div className="Form-div" id='Form-div'>

            <form className="Form" id="sub-form" onSubmit={handleSubmit}>

                <div className="Close" onClick={Close}>
                    <Image alt="Close" src="/Close.svg" height={100} width={100} />
                </div>
            
                <div className="Message">
                    <Image alt="MessageIcon" width={100} height={100} src="/Message.svg" />
                </div>

                <h1>Get exclusive deals</h1>

                <input value={email} onChange = {(e)=>{setEmail(e.target.value)}} required={true} type="mail" placeholder="Enter your Email address" /> 

                <p>You will receive promotional emails from Connect Travel. Form more information, see (the) privacy police.</p>

                <button type="submit" className="ConnectButton">Get them</button>

            </form>
            
            <div className="Blur" id="Form-Page" onClick={Close}>

            </div>

        </div>

    );

}export default Form;