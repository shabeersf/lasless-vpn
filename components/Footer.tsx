import Container from "@/components/Container"
import { Facebook, InstagramIcon, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <div className=" w-full h-full bg-[#F4F4F4] relative">
      <div className=" absolute md:-top-20 -top-28 bg-white rounded-xl flex max-[500px]:gap-4 max-[500px]:flex-col items-center justify-center max-w-4xl mx-auto shadow-xl p-4 mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="max-md:flex-col max-md:text-center gap-3 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold   md:text-lg tracking-wide">        Subscribe now for
              get special features!</h4>
            <p className=" text-grayColor text-sm leading-5">
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
            </p>
          </div>
          <div>
            <button className=" w-fit bg-primary py-2 px-5 rounded-xl font-bold text-white whitespace-nowrap">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
      <Container id="footer">

        <div className="flex justify-between items-center  max-md:flex-col gap-7 mt-16">
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image src="./Laslogo.svg" alt="logo" width={100} height={100} />
            </Link>
            <p className=" text-grayColor text-xs md:text-sm leading-5">
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
            </p>
            <div className="flex max-md:justify-center gap-4 items-center">
              <div className=" text-primary bg-red-200 rounded-full p-2">
                <Facebook size={20} />
              </div>
              <div className=" text-primary bg-red-200 rounded-full p-2">
                <InstagramIcon size={20} />
              </div>
              <div className=" text-primary bg-red-200 rounded-full p-2">
                <Youtube size={20} />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-3 items-start text-sm">
            <div className="space-y-2">
              <h6 className="font-bold">Product</h6>
              <ul className="space-y-2 text-grayColor">
                <li>User-Friendly VPN Apps</li>
                <li>Fast and Secure Server Network</li>
                <li>Strict No-Logs Policy</li>
                <li>Cross-Platform Compatibility</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h6 className="font-bold">Engage</h6>
              <ul className="space-y-2 text-grayColor">
                <li>Stay Anonymous Online</li>
                <li>Access Geo-Restricted Content</li>
                <li>Enhance Online Privacy</li>
                <li>Protect Your Data on Public Wi-Fi</li>
                <li>Bypass Internet Censorship</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h6 className="font-bold">Money</h6>
              <ul className="space-y-2 text-grayColor">
                <li>Affordable Pricing Plans</li>
                <li>30-Day Money-Back Guarantee</li>
                <li>Free Trial Period</li>
                <li>Discounts for Long-Term Subscriptions</li>
                <li>Secure Payment Options</li>
              </ul>
            </div>
          </div>
        </div>

      </Container>
    </div >
  )
}

export default Footer