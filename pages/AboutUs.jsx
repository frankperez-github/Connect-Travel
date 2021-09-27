import RedSection from "./Components/RedSection";

function About_Us(){
    return(
        <div className="AboutUs redSection">
            <h1 className="AboutTitle">About CONNECT</h1>

            <p className="AboutUsP">As a family Travel Agency we are commited to making our clients feels an excellent experience before, during and after their trips; thus fulfilling our objective; please them.</p>

            <button className="ConnectButton ContactButton">Contact</button>

            <RedSection />
        </div>
    );
}export default About_Us;