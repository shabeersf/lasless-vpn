import Container from "@/components/Container"
import Image from "next/image"


const MapVpn = () => {
    return (
        <Container id="maps">
            <div className=" space-y-5">
                <h3 className="font-bold text-lg  md:text-3xl text-center">Huge global network
                    of fast VPN</h3>
                <p className=" text-grayColor text-sm leading-5 text-center">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
            </div>
            <div className="mt-5 flex flex-col gap-5 items-center justify-center">
                <Image src={'/map.png'} alt="map" width={700} height={700} />
                <Image src={'/sponsor.png'} alt="map" width={700} height={400} />
            </div>
        </Container>
    )
}

export default MapVpn