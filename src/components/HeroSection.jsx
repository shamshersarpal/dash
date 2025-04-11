import Image from "next/image";
import qr from "../images/qr.svg";
import Link from "next/link";
export default function Herosection() {
  return (
    <>
      <section className="relative banner py-[150px]">
        <div className="bg-[#080808] absolute w-full h-full top-0 left-0 opacity-[0.2]"></div>

        <div className="max-w-screen-xl mx-auto relative z-0 py-5">
          <div className="lg:block hidden">
            <div className="flex flex-wrap justify-between">
              <div className="">
                <h1 className="text-white text-[100px] font-[800] font-ws leading-[1.1]">
                  Life stories on <br></br> a QR code
                </h1>

                <a
                  className="btn-theme w-[297px] h-[88px] mt-8 text-[22px] font-[700]"
                  href=""
                >
                  Get Started
                </a>
              </div>

              <div>
                <Image src={qr} alt="" />
              </div>
            </div>
          </div>

          <div className="lg:hidden block text-center">
            <h1 className="text-white text-[40px] font-[800] font-ws   text-center">
              Life stories on
            </h1>
            <h1 className="text-white text-[40px] font-[800] font-ws flex justify-center gap-2">
              <span className="text-[#14F6FE] flex gap-2">
                <Image className="w-[40px]" src={qr} alt="" /> QR
              </span>{" "}
              code
            </h1>

            <div className="text-center flex justify-center">
              <a
                className="btn-theme w-[218px] h-[58px] mt-8 text-[18px] font-[600]"
                href=""
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
