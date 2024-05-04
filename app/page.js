import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col  text-white">
      <div className="font-bold md:text-4xl flex gap-2 justify-center items-center px-5 md:px-0 text-3xl p-2">
        Buy Me a Chai
        <span>
          <Image src="/chai.gif" width={60} height={60} alt="chai"/>
        </span>
      </div>
      <div className=" flex flex-col justify-center items-center gap-2 pl-5 ">
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div className="gap-6 mb-3">
          
          <Link href={"/login"}>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2"
          >
            Start Here
          </button></Link>
          <Link href={"/about"}>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="bg-white h-1 opacity-10"></div>
        <div className="text-white container mx-auto mb-5">
          <div className=" text-white text-center ">
            <h2 className="text-2xl text-white  font-semibold text-center my-10  ">
              Your Fans can buy you a Chai
            </h2>
            <div className=" flex flex-col justify-around md:flex-row ">
              <div className="item space-y-2 flex flex-col justify-center items-center pb-5 ">
                <Image
                  className="item bg-slate-300 rounded-full p-2 text-black "
                  src="/source(1).png"
                  alt=""
                  width={90}
                  height={90}
                />
                <p className="">Fans want to help</p>

                <p className="text-center ">
                  Your fans are available for you to help.
                </p>
              </div>
              <div className="item space-y-3 flex flex-col justify-center items-center mb-5">
                <Image
                  className="item bg-slate-300 rounded-full p-2 text-black "
                  src="/coin-mario.gif"
                  alt=""
                  width={90}
                  height={90}
                />
                <p className="">Fans want to help</p>

                <p className="text-center">
                  Your fans are available for you to help.
                </p>
              </div>
              <div className="item space-y-3 flex flex-col justify-center items-center mb-5">
                <Image
                  className="item bg-slate-300 rounded-full p-2 text-black "
                  src="/friends-team.gif"
                  alt=""
                  width={90}
                  height={90}
                />
                <p className="">Fans want to help</p>

                <p className="text-center">
                  Your fans are available for you to help.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-1 opacity-10"></div>
          <div className="text-white container mx-auto mb-3">
          <div className=" text-white text-center  ">
            <h2 className="text-2xl text-white  font-semibold text-center my-10 ">
              Learn More about us..
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  );
}
