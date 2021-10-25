import Image from 'next/image'

function PackageCard({pack}) {

    const valid_from = new Date(pack.valid_from)
    const valid_to = new Date(pack.valid_to)

    return(
        <div className="PackageCard">
            
            <div className="LeftSideCard">
                <Image alt="Image" src={pack.image} width={1000} height={800} />
            </div>

            <div className="RightSideCard">
                <div className="Line FirstLine">

                    <div className="Clock Icon">
                        <Image alt="Clock" src="/Clock.svg" width={100} height={100} />
                    </div>

                    <p className="ClockP">9 Days</p>

                    <h2> {pack.title} </h2>

                </div>

                <div className="Line">
                    <div className="Calendar Icon" >
                        <Image alt="Calendar" src="/Calendar.svg" width={100} height={100} />
                    </div>

                    <p>
                        Valid from {valid_from.getDate()}, {valid_to.getFullYear()} to {valid_to.getDate()}, {valid_to.getFullYear()}
                    </p>

                    <p>
                        Visiting: {pack.destination}
                    </p>

                </div>

                <div className="Line">

                    <div className="Ubication Icon">
                        <Image alt="Ubication" src="/Ubication.svg" width={100} height={100} />
                    </div>

                    <p className="lastP"> {pack.description}</p>

                </div>

                <div className="Line">

                    <div className="Left">
                        <p>per adult</p>

                        <h2 className="Price">&#36;{pack.price}</h2>
                    </div>
                    

                    <button className="ConnectButton Reserve">Reserve</button>

                </div>

            </div>

        </div>
    );

}export default PackageCard