import Image from "next/image";
import Link from "next/link";
export default function Navbar(){
    return (
        <div className="w-[100%] border-b-[1px] border-[#BEBCBD]">
            <div className="items-center justify-between m-auto flex flex-wrap max-w-[1237px] min-h-[108px] gap-10">
                <Link href={'/'}>
                    <Image
                    src='/sito-logo.svg'
                    alt="Logo Sito"
                    width={100}
                    height={100}
                    />
                </Link>
                <ul className="flex gap-10">
                    <li className="hover:text-[#8c8c8c]"><Link href={'/'}>Shop</Link></li>
                    <li className="hover:text-[#8c8c8c]"><Link href={''}>Men</Link></li>
                    <li className="hover:text-[#8c8c8c]"><Link href={'/products'}>Women</Link></li>
                    <li className="hover:text-[#8c8c8c]"><Link href={''}>Combos</Link></li>
                    <li className="hover:text-[#8c8c8c]"><Link href={''}>Joggers</Link></li>
                </ul>
                <div className="rounded-[8px] top-input w-[267px] h-[44px] bg-[#F6F6F6] flex justify-center items-center gap-3">
                    <Image
                    src='/search-icon.svg'
                    alt="Logo Sito"
                    width={20}
                    height={20}
                    />
                    <input className="outline-none w-[210px] h-[44px] bg-[#F6F6F6]" type="text" placeholder="Search"/>
                </div>
                <div className="flex gap-3">
                    <a href=""><button className="bg-[#F6F6F6] hover:bg-[#ebebeb] w-[44px] h-[44px] items-center justify-center flex rounded-[8px]"><Image src={'/user.svg'} alt="uzer-logo" width={20} height={20}/></button></a>
                    <a href="/tash"><button className="bg-[#F6F6F6] hover:bg-[#ebebeb] w-[44px] h-[44px] items-center justify-center flex rounded-[8px]"><Image src={'/corzinka.svg'} alt="user-logo" width={20} height={20}/></button></a>
                </div>
            </div>
        </div>
    )
}