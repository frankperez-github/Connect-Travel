import PackageCard from "./Components/PackageCard";

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

        </div>
    );

}export default Destination;