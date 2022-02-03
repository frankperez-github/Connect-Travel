import Image from 'next/image'
import Link from 'next/link'

const CloseMenu =()=>{
    document.getElementById('blur').style.display="none"
    document.getElementById('SideMenu').style.display="none"
}
const ShowForm = () =>{
    document.getElementById('Form-div').style.display="block";
    document.getElementById('Form-Page').style.display="block";
}

function SideMenu(){
return(
    <div className="SideMenu AnimationMenu" id='SideMenu'>
        <div className="CloseMenu">
            <Image onClick={CloseMenu} className="CloseMenuImg" width={30} height={30} src="/CloseWhite.svg" alt="X" />
        </div>

        <div className="NavigationLinksMob" onClick={CloseMenu}>

            <a href="#"> Covid-19 Travel Info </a>

            <p onClick={ShowForm}> Exclusive Deals </p>

            <Link href="/AboutUs"> About Us </Link>

            <Link href="/Terms_Conditions"> Terms and Conditions </Link>

        </div>
    </div>
)
}
export default SideMenu;