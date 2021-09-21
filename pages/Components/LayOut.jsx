import Image from 'next/image'
import Link from 'next/link'

function LayOut(props) {

    const ShowForm = () =>{
        var Form = document.getElementById('Form-Page');
        Form.style.display="block"
    }

    return(
        <div className="Layout">

            <div className="navBar">

                <div className="Logo">
                    <Link href="/">
                        <Image alt="Logo" src="/Logo.svg" width={200} height= {55} />
                    </Link>
                </div>
                
            
                <div className="NavigationLinks">
                    <a href="#"> Covid-19 Travel Info </a>

                    <p onClick={ShowForm}> Exclusive Deals </p>

                    <a href="#"> About Us </a>

                    <a href="#"> FAQ </a>

                </div>

            </div>

            <main>
                {props.children}
            </main>

            
            <div className="footer">

                <div className="logoFooter">
                    <Image alt="Logo" src="/footerLogo.svg" width={350} height={95} />
                </div>

                <div className="footerInfo">

                    <div className="leftInfo">
                        <p>SP: <a href="tel:+17863896393">+1 786 389 6393</a></p>

                        <p>EN: <a href="tel:+17863897560">+1 786 389 7560</a></p>

                        <div className="">
                            <a href="mailto:book@connectravel.us">book@connectravel.us</a>
                        </div>
                        
                        <div className="connectWeb">
                            <a href="www.connectravel.us" >www.connectravel.us</a>
                        </div>
                       

                    </div>

                    <div className="rightInfo">
                        <p>Connect Travel corporation is not responsible for content on external Web sites</p>

                        <p>&copy; 2020 Connect Travel Corporation.<br/> All rights reserved</p>
                    </div>
                    
                    <div className="networksLink">

                        <div className="InstagramLink network">
                            <a href="#">
                                <Image alt="Instagram" src="/Instagram.svg" width="100%" height="100%" />
                            </a>
                        </div>

                        <div className="FacebookLink network">
                            <a href="#">
                                <Image alt="Facebook" src="/Facebook.svg" width="100%" height="100%" />
                            </a>
                        </div>
                        
                    </div>

                </div>

            </div>
            

        </div>
    )
    
} export default LayOut;