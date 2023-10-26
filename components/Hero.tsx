import Container from "@/components/Container"
import { DatabaseZapIcon, MapPin, User } from "lucide-react"
import Image from "next/image"


const Hero = () => {
    return (
        <Container>
            <div className="w-full flex justify-between items-center text-grayColor max-md:flex-col max-md:gap-5">
                <div className="w-full flex-col gap-6 flex">
                    <h1 className=" tracking-wide text-2xl md:text-4xl leading-10 ">Want anything to be easy with <span className="font-bold">LaslesVPN</span>
                    </h1>
                    <p className=" text-grayColor text-sm leading-5">
                        Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
                    </p>
                    <button className=" w-fit bg-primary py-2 px-5 rounded-xl font-bold text-white">
                        Get started
                    </button>

                </div>
                <div className="w-full h-full flex items-center justify-between">
                    <Image src="/illus1.png" alt="hero-image" width={500} height={500} />
                </div>

            </div>
            <div className=" rounded-xl flex max-[500px]:gap-4 max-[500px]:flex-col items-center justify-center max-w-3xl mx-auto shadow-xl p-4 mt-10">
                <div className=" w-full flex items-center justify-center gap-4  min-[501px]:border-r border-slate-200">
                    <div className=" text-primary bg-red-200 rounded-full p-2">
                        <User size={20} />

                    </div>
                    <div>
                        <p className="font-bold">30+</p>
                        <p className="text-sm text-grayColor/75"> Users</p>
                    </div>
                </div>
                <div className=" w-full flex items-center justify-center gap-4  min-[501px]:border-r border-slate-200">
                    <div className=" text-primary bg-red-200 rounded-full p-2 text-center">
                        <MapPin size={20} />

                    </div>
                    <div>
                        <p className="font-bold">30+</p>
                        <p className="text-sm text-grayColor/75"> Places</p>
                    </div>
                </div>
                <div className=" w-full flex items-center justify-center gap-4  ">
                    <div className=" text-primary bg-red-200 rounded-full p-2">
                        <DatabaseZapIcon size={20} />

                    </div>
                    <div>
                        <p className="font-bold">50+</p>
                        <p className="text-sm text-grayColor/75"> Servers</p>
                    </div>
                </div>
               
            </div>
        </Container>
    )
}

export default Hero