import PackageCard from "../Components/PackageCard";
import Form from '../Components/Form'

function Destination(){

    return(
        <div className="Destination">
            
            <div className="PicSection">
                <h1>Caribbean</h1>
            </div>

            <div className="container">
                <PackageCard />

                <PackageCard />

                <PackageCard />
            </div>

            <Form />


        </div>
    );

}export default Destination;