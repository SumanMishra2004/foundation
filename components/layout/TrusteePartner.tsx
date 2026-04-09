import "../../app/globals.css";
import Image from "next/image";
import TrusteePic from "@/public/trustee.jpg";
const TrusteePartner = () => {
  return (
    <div className="container max-w-7xl mx-auto bg-gray-200">
      <div className="overflow-hidden px-5 group">
      <div className="flex gap-5 py-5  animate-scroll group-hover:[animation-play-state:paused]">
        {[...Array.from({ length: 15})].map((_, index) => {
          return (
            <div key={index} className=" rounded-full ">
              <Image
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt="Trustee/Partner"
                width={60}
                height={60}
                className="rounded-full hover:scale-110 transition-transform duration-300 ease-in"
              />
            </div>
          );
        })}
             {[...Array.from({ length: 15})].map((_, index) => {
          return (
            <div key={index} className="rounded-full shrink-0 grow-0 aria-hidden">
              <Image
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt="Trustee/Partner"
                width={60}
                height={60}
                className="rounded-full hover:scale-110 transition-transform duration-300 ease-in"
              />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default TrusteePartner;
