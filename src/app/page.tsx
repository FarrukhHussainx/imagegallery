import UploadeButton from "@/components/UploadeButton";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <div className="w-full flex h-screen">
        <div className="w-[22%]">
          <Gallery />
        </div>
        <div className="w-[78%] border-l border-gray-500">
          {/* <UploadeButton /> */}
          <Gallery />
          <hr />
        </div>
      </div>
    </>
  );
}
