import Link from 'next/link'
import Image from 'next/image'

const RegionCard = ({region}) => {
    return (
        <Link href="/Destination" passHref={true}>
        <div className="SpecificDestination">
            <Image alt="Destiny" width={1000} height={1000} src="/South_America.svg" />
        </div>
    </Link>
    )
}

export default RegionCard