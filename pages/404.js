import GreyCloud from "@/public/assets/grey_cloud.svg";
import Image from "next/image";

export default function Error404() {
  return (
    <div className="bg-methinks-background w-full h-screen flex flex-col justify-center items-center text-white">
      <title>404</title>
      <div className="absolute justify-center items-center -translate-y-[10%]">
        <Image src={GreyCloud} alt="cloud" draggable={false} />
      </div>

      <div className="flex flex-col items-center justify-center h-fit w-[480px] h-[480px] z-10 absolute m-0 p-0">
        <p className=" text-9xl m-0 mt-2 font-semibold">404</p>
        <p className=" text-lg mt-4">Page not found!</p>
      </div>
    </div>
  );
}
