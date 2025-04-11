import Image from "next/image";
import whyus from "../images/whyuse.png";
import mark from "../images/mark.svg";
import learnmorebtn from "../images/learn-more.svg";
import oneImag from "../images/Unlimited-storage-space.svg";
import twoImag from "../images/Data-protection-guaranteed.svg";
import threeImag from "../images/Security-in-cas- of-loss.svg";
import fourImag from "../images/One-off-payment.svg";

export default function WhyDash() {
  return (
    <>
      <section className="  border-b-[#242424] border whyUs relative">
        <Image
          className="learmore lg:w-[172px] w-[140px]"
          src={learnmorebtn}
          alt=""
        />
        <div className="max-w-screen-xl  mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="border-r-[#242424] border lg:py-[120px] lg:pt-[80px] pt-0 lg:border-b-0 border-b-[#242424]">
              <Image
                className="w-full lg:max-w-[418px] max-w-[318px] mx-auto px-5 lg:px-0 border lg:border-0 border-r-[#242424] border-l-[#242424] lg:pt-0 pt-20"
                src={whyus}
                alt=""
              />
            </div>
            <div className="lg:ps-10 lg:pt-[120px] pt-[20px] px-5 lg:px-0">
              <h2 className="text-white font-ws text-[47px] font-[500]">
                Why Use <span className="text-[#ED0EEB] font-[900]">DASH</span>?
              </h2>

              <div className="lisits mt-5">
                <ul className="space-y-1 text-gray-500 list-inside">
                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white">
                        {" "}
                        IMPORTANCE.
                      </span>{" "}
                      Most of us will have one celebration of life, one wedding,
                      one graduation, one important life ceremony so we want to
                      tell those life stories how they deserved to be told.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white">
                        {" "}
                        EXPERIENCE.
                      </span>{" "}
                      This is a calling. Splicing music, sound mixing, and
                      placing certain photos with song lyrics...these are all
                      included in your video photo stories.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white"> TIME.</span>{" "}
                      Spend more time with loved ones while we do this for you.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white"> QUALITY.</span>{" "}
                      Experience beautiful printed cards/programs, plaques,
                      keepsakes, all made here in the U.S.A. utilizing
                      independent businesses with ethical wages and working
                      conditions in California, Washington, Nevada, New Mexico,
                      New York, Florida, and growing.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white">LOVE.</span> Heart
                      and soul into every slideshow.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <div className="text-white text-[16px] ">
                      You only get one chance to get this right. Long after you
                      forget price... quality remains.
                    </div>
                  </li>
                </ul>

                <button
                  type="button"
                  className="loginBtn mt-3 w-[176px] h-[51px]"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl  mx-auto py-[100px]">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 text-center ">
          <div className="text-center m-auto border border-[#242424] rounded-[30px] p-4 h-full">
            <div className="flex items-center justify-center">
              <Image className="h-[168px]" src={oneImag} alt="" />
            </div>
            <h3 className="text-white font-[500] text-[19px]">
              Unlimited storage space
            </h3>
            <p className="font-[400] text-[16px] text-white/60">
              Keep every precious memory of your loved ones safe
            </p>
          </div>

          <div className="text-center m-auto border border-[#242424] rounded-[30px] p-4 h-full">
            <div className="flex items-center justify-center">
              <Image className="h-[168px]" src={twoImag} alt="" />
            </div>
            <h3 className="text-white font-[500] text-[19px]">
              Data protection guaranteed
            </h3>
            <p className="font-[400] text-[16px] text-white/60">
              You alone decide who can look at your Dash
            </p>
          </div>

          <div className="text-center m-auto border border-[#242424] rounded-[30px] p-4 h-full">
            <div className="flex items-center justify-center">
              <Image className="h-[168px]" src={threeImag} alt="" />
            </div>
            <h3 className="text-white font-[500] text-[19px]">
              Security in case of loss
            </h3>
            <p className="font-[400] text-[16px] text-white/60">
              Immediate replacement if your Dash is stolen or lost*
            </p>
          </div>

          <div className="text-center m-auto border border-[#242424] rounded-[30px] p-4 h-full">
            <div className="flex items-center justify-center">
              <Image className="h-[168px]" src={fourImag} alt="" />
            </div>
            <h3 className="text-white font-[500] text-[19px]">
              One-off payment
            </h3>
            <p className="font-[400] text-[16px] text-white/60">
              Lifetime service without any hidden costs or subscription traps
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
