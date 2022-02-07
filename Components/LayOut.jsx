import Image from 'next/image'
import Link from 'next/link'
import Form from './Form';
import SideMenu from './SideMenu';

function LayOut(props) {


    const ShowForm = () =>{
        document.getElementById('Form-div').style.display="block";
        document.getElementById('Form-Page').style.display="block";
    }
    const CloseMenu =()=>{
        document.getElementById('blur').style.display="none"
        document.getElementById('SideMenu').style.display="none"
    }
    const ShowMenu =()=>{
        document.getElementById('blur').style.display="block"
        document.getElementById('SideMenu').style.display="block"
    }

    return(
        
        <div className="Layout">

            <div className="navBar">

                <div className="Logo">
                     < Link href="/" passHref={true}>
                        <Image alt="Logo" src="/Logo.svg" width={200} height= {55} />
                    </Link>
                </div>

                <div className="BurgerMenu">
                    <Image onClick={ShowMenu} width={30} height={30} src="/BurgerMenu.svg" alt="Menu" />
                </div>

                <div className="blur" id='blur' onClick={CloseMenu}></div>

                    <div className="NavigationLinks" onClick={CloseMenu}>

                        <a href="https://apply.joinsherpa.com/map/"  rel="noreferrer" target="_blank"> Covid-19 Travel Info </a>

                        <p onClick={ShowForm}> Exclusive Deals </p>

                        <Link href="/AboutUs"> About Us </Link>

                        <Link href="/Terms_Conditions"> Terms and Conditions </Link>

                    </div>

                    <SideMenu />
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
                        <div className="Phones">
                            <p><span>SP:</span> <a href="tel:+17863896393">+1 786 389 6393</a></p>

                            <p><span>EN:</span> <a href="tel:+17863897560">+1 786 389 7560</a></p>
                        </div>

                        <div className="Mails">
                            <div className="">
                                <a href="mailto:book@connectravel.us">book@connectravel.us</a>
                            </div>
                            
                            <div className="connectWeb">
                                <a href="https://www.connectravel.us" >www.connectravel.us</a>
                            </div>
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

            <Form />
        </div>
    )
    
} export default LayOut;