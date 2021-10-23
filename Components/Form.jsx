import Image from 'next/image'

function Form(){

    const HideForm = () =>{
        var Form = document.getElementById('Form-Page');
        Form.style.display="none"
    }

    return(

        <div className="Form-div">

            <div className="Blur" id="Form-Page" onClick={HideForm}>

                <div className="Form">

                    <div className="Close" onClick={HideForm}>
                        <Image alt="Close" src="/Close.svg" height={100} width={100} />
                    </div>
                
                    <div className="Message">
                        <Image alt="MessageIcon" width={100} height={100} src="/Message.svg" />
                    </div>

                    <h1>Suscribe to recibe exclusive deals</h1>

                    <input type="mail" placeholder="Enter your Email address" /> 

                    <p>You will receive promotional emails from Connect. Form more information, see (the) privacy police.</p>

                    <button className="ConnectButton" onClick={HideForm}>Receive</button>

                </div>
            </div>

        </div>

    );

}export default Form;