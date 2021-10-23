import Image from 'next/image'

function PackageCard(){

    return(
        <div className="PackageCard">
            
            <div className="LeftSideCard">
                <Image alt="Image" src="/CardImage.svg" width={1000} height={800} />
            </div>

            <div className="RightSideCard">
                <div className="Line FirstLine">

                    <div className="Clock Icon">
                        <Image alt="Clock" src="/Clock.svg" width={100} height={100} />
                    </div>

                    <p className="ClockP">9 Days</p>

                    <h2>A Walk to Remember</h2>

                </div>

                <div className="Line">
                    <div className="Calendar Icon" >
                        <Image alt="Calendar" src="/Calendar.svg" width={100} height={100} />
                    </div>

                    <p>
                        Valid from May 11,2020 to Mar 15,2021
                    </p>

                    <p>
                        Visiting: Ámsterdam, Bruges, Brussels, Cologne KOln, Cruise on The River Rhinee, Frankfurt, Lauf, Paris, Prague, Wurzburg.
                    </p>

                </div>

                <div className="Line">

                    <div className="Ubication Icon">
                        <Image alt="Ubication" src="/Ubication.svg" width={100} height={100} />
                    </div>

                    <p className="lastP">Trip to Visiting: Ámsterdam, Bruges, Brussels, Cologne KOln, Cruise on The River Rhinee, Frankfurt, Lauf, Paris, Prague, Wurzburg.</p>

                </div>

                <div className="Line">

                    <div className="Left">
                        <p>per adult</p>

                        <h2 className="Price">$1041.00</h2>
                    </div>
                    

                    <button className="ConnectButton Reserve">Reserve</button>

                </div>

            </div>

        </div>
    );

}export default PackageCard