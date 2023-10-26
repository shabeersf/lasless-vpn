import Container from "@/components/Container"
import Image from "next/image"
import { Check } from 'lucide-react';

const featureList = [
    {
        id: 1,
        title: 'Powerful online protection.',
    },
    {
        id: 2,
        title: 'Secure and anonymous browsing.',
    },
    {
        id: 3,
        title: 'Ultra-fast server network.',
    },
    {
        id: 4,
        title: 'No bandwidth restrictions.',
    },
    {
        id: 5,
        title: 'Cross-platform compatibility.',
    },
];

const Features = () => {
    return (
        <Container id="features">
            <div className="w-full flex justify-between items-center text-grayColor max-md:flex-col gap-5">
                <div className="w-full h-full flex items-center justify-center">
                    <Image src="/illus2.png" alt="hero-image" width={500} height={500} />
                </div>
                <div className="w-full flex-col justify-between gap-4 flex">
                    <h3 className=" font-semibold text-lg md:text-2xl leading-5 ">We provide many
                        features you can use
                    </h3>
                    <p className=" text-grayColor text-sm leading-5">
                        Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper.
                    </p>
                    <ul className="flex flex-col gap-2">
                        {
                            featureList.map((feature) => (
                                <li key={feature.id} className="text-sm font-semibold flex items-center gap-2"><span className="rounded-full bg-green-400 text-white p-[2px] font-bold" ><Check size={10} /></span>{feature.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default Features