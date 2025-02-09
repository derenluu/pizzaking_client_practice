import Image from "next/image";
import { ArrowRight } from "../icons/ArrowRight";

const Hero = () => {
  return (
    <>
      <section className="hero mt-8">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everything is better with a&nbsp;
            <br />
            <span className="text-primary">Pizza King</span>
          </h1>
          <p className="my-6 text-gray-500 text-sm ">
            Pizza King is the missing piece that makes every day complete, a
            simple yet delicious joy in life
          </p>
          <div className="flex gap-4 text-sm">
            <button className="flex gap-2 items-center bg-primary text-white uppercase px-4 py-2 rounded-full">
              Order now
              <ArrowRight />
            </button>
            <button className="flex gap-2 py-2 text-gray-600 font-semibold ">
              Learn more
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="relative  ">
          <Image
            src={"/pizza.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"pizza"}
          />
        </div>
      </section>
    </>
  );
};
export default Hero;
