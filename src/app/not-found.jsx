import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Notfound() {
    return (
      <>
        <Navbar/>
        <div className="m-auto max-w-[1000px] justify-center items-center pt-[83px] pb-[100px] h-[100%] flex text-center flex-col">
          <Image
            src='/png/404-image.png'
            alt="Logo Sito"
            width={396}
            height={274}
          />
          <h1 className="font-semibold text-[34px]">Oops! Page not found</h1>
          <p className="text-[#807D7E]">The page you are looking for might have been removed or <br /> temporarily unavailable.</p>
          <Link href={'/'}>
            <button className="mt-[42px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 font-bold w-[250px] h-[61px] bg-[#8A33FD] rounded-[8px] text-white">Back to HomePage</button>
          </Link>
        </div>
        <Footer/>
      </>
    );
  }
  