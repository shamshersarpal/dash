import Image from "next/image";
import star from "../images/star.svg";
import quads from "../images/quads.svg";
import testo from "../images/testo.svg";

export default function ClientsSay() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto w-full py-20 lg:px-0 px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <Image className="" src={testo} alt="" />
          </div>
          <div>
            <h2 className="text-white font-ws text-[47px] font-[500]">
              What Our
              <span className="text-[#ED0EEB] font-[900]"> Clients</span> Say
            </h2>

            <div className="border border-[#242424] rounded-[30px] p-10 mt-4">
              <div className="flex gap-2">
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
                <Image src={star} alt="" />
              </div>
              <h3 className="text-white  text-[20px] font-[500] mt-4">
                A wonderful way to memorialize a loved one
              </h3>

              <p className="text-[16px] text-white/60 mt-2">
                I loved how easy it was so set up my son’s memorial. Made from
                sturdy materials. I am extremely satisfied with my purchase. I
                was looking for a way to add personalization to our families
                memorial bench. This QR code was the perfect item. Easy to set
                up and install.
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-[20px] font-[500] text-[#14F6FE] mt-5">
                    Lois Tromblay
                  </h4>
                  <p className="text-[13px] text-white/60">July 19, 2023</p>
                </div>

                <div>
                  <Image className="mt-5" src={quads} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
