import "../../app/globals.css";
import Image from "next/image";
import TrusteePic from "@/public/trustee.jpg";
const TrusteePartner = () => {

  return (
    <div className="container max-w-7xl mx-auto bg-yellow-400 overflow-hidden">
      
      <div className="flex gap-5 py-5 animate-scroll whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div key={index} className="rounded-full">
              <Image
                src={TrusteePic}
                alt="Trustee/Partner"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
          );
        })}
   
    
      </div>
    </div>
  );
};

export default TrusteePartner;
