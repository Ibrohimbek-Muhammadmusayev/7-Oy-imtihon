'use client'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function products(){
    const [data, setData] = useState([])
    const getdata = ()=> {
        fetch('https://fakestoreapi.com/products?limit=12')
        .then(res => res.json())
        .then(data => setData(data))
    }
    
    useEffect(()=> {
        getdata()
    }, [])

    return(
        <div>
            <Navbar/>
            <div className="m-auto max-w-[1240px] h-[100%]">
                <div className="flex justify-between">
                    <div className="w-[295px] h-[100%] border">
                        <div className="w-[295px] h-[66px] flex justify-center items-center">
                            <input className="outline-none w-[210px]" type="text" placeholder="Filter"/>
                            <Image
                                src="/filter.svg"
                                alt="search"
                                width={20}
                                height={20} 
                            />
                        </div>
                        <div className="text-[#8A8989] border-t-[1px] pt-[40px] pb-[40px] w-[295px] h-[100%] flex flex-col gap-[18px] items-center">
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Tops</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Printed T-shirts</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Plain T-shirts</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Kurti</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Boxers</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Full sleeve T-shirts</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Joggers</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Payjamas</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                            <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                <h1 className="hover:text-[#dbb5b5]">Jeans</h1>
                                <Image
                                    src="/icon(1).svg"
                                    alt="bar"
                                    width={5}
                                    height={10}
                                />
                            </div>
                        </div>
                        <div className="w-[295px] h-[66px] border-t-[1px] cursor-pointer">
                            <div className="m-auto text-[#8A8989] flex justify-between items-center w-[230px] h-[66px]">
                                <h1>Price</h1>
                                <Image
                                    src="/icon(2).svg"
                                    alt="bar"
                                    width={10}
                                    height={5}
                                />
                            </div>
                        </div>
                        <div className="w-[295px] h-[156px] border-t-[1px] cursor-pointer">
                            <div className="m-auto text-[#8A8989] flex justify-between items-center w-[230px] h-[66px]">
                                <input className="" type="range" />
                                <input className="" type="range" />
                            </div>
                            <div className="flex m-auto justify-between w-[230px]">
                                <button className="border-2 hover:bg-[#f0f0f0] text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">$70</button>
                                <button className="border-2 hover:bg-[#f0f0f0] text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">$600</button>
                            </div>
                        </div>
                        <div className="w-[295px] h-[66px] border-t-[1px] cursor-pointer">
                            <div className="m-auto text-black flex justify-between items-center w-[230px] h-[66px]">
                                <h1>Color</h1>
                                <Image
                                    src="/icon(2).svg"
                                    alt="bar"
                                    width={10}
                                    height={5}
                                />
                            </div>
                        </div>
                        <div className="w-[295px] h-[100%] border-t-[1px] cursor-pointer">
                            <div className="m-auto text-black flex gap-[20px] pt-[40px] pb-[40px] justify-between flex-wrap items-center w-[230px] h-[100%]">
                                <div className="bg-[#8434E1] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#252525] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#F35528] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#F35528] rounded-[12px] w-[37px] h-[37px]"></div>
                                <p className="text-[14px] text-[#8A8989]">Purple</p>
                                <p className="text-[14px] text-[#8A8989]">Black</p>
                                <p className="text-[14px] text-[#8A8989]">Red</p>
                                <p className="text-[14px] text-[#8A8989]">Orange</p>
                                <div className="bg-[#345EFF] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#D67E3B] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#48BC4E] rounded-[12px] w-[37px] h-[37px]"></div>
                                <p className="text-[14px] text-[#8A8989]">Navy</p>
                                <p className="text-[14px] text-[#8A8989]">White</p>
                                <p className="text-[14px] text-[#8A8989]">Broom</p>
                                <p className="text-[14px] text-[#8A8989]">Green</p>
                                <div className="bg-[#FDC761] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#E4E5E8] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#E08D9D] rounded-[12px] w-[37px] h-[37px]"></div>
                                <div className="bg-[#3FDEFF] rounded-[12px] w-[37px] h-[37px]"></div>
                                <p className="text-[14px] text-[#8A8989]">Yellow</p>
                                <p className="text-[14px] text-[#8A8989]">Grey</p>
                                <p className="text-[14px] text-[#8A8989]">Pink</p>
                                <p className="text-[14px] text-[#8A8989]">Blue</p>
                            </div>
                            <div className="w-[295px] h-[66px] border-t-[1px] cursor-pointer">
                                <div className="m-auto text-black flex justify-between items-center w-[230px] h-[66px]">
                                    <h1 className="text-[#8A8989]">Size</h1>
                                    <Image
                                        src="/icon(2).svg"
                                        alt="bar"
                                        width={10}
                                        height={5}
                                    />
                                </div>
                            </div>
                            <div className="w-[295px] h-[100%] border-t-[1px] cursor-pointer">
                                <div className="m-auto flex-wrap gap-[20px] pt-[40px] pb-[40px] text-black flex justify-between items-center w-[230px]">
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>XXS</h1>
                                    </div>
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>XL</h1>
                                    </div>
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>XS</h1>
                                    </div>
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>S</h1>
                                    </div>
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>M</h1>
                                    </div>
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>L</h1>
                                    </div>
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>XXL</h1>
                                    </div>
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>3XL</h1>
                                    </div>
                                    <div className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">
                                        <h1>4XL</h1>
                                    </div>
                                </div>
                                <div className="w-[295px] h-[66px] border-t-[1px] cursor-pointer">
                                    <div className="m-auto text-black flex justify-between items-center w-[230px] h-[66px]">
                                        <h1 className="text-[#8A8989]">Dress Style</h1>
                                        <Image
                                            src="/icon(2).svg"
                                            alt="bar"
                                            width={10}
                                            height={5}
                                        />
                                    </div>
                                </div>
                                <div className="text-[#8A8989] border-t-[1px] pt-[40px] pb-[40px] w-[295px] h-[100%] flex flex-col gap-[18px] items-center">
                                    <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                        <h1 className="hover:text-[#dbb5b5]">Classic</h1>
                                        <Image
                                            src="/icon(1).svg"
                                            alt="bar"
                                            width={5}
                                            height={10}
                                        />
                                    </div>
                                    <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                        <h1 className="hover:text-[#dbb5b5]">Casual</h1>
                                        <Image
                                            src="/icon(1).svg"
                                            alt="bar"
                                            width={5}
                                            height={10}
                                        />
                                    </div>
                                    <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                        <h1 className="hover:text-[#dbb5b5]">Business</h1>
                                        <Image
                                            src="/icon(1).svg"
                                            alt="bar"
                                            width={5}
                                            height={10}
                                        />
                                    </div>
                                    <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                        <h1 className="hover:text-[#dbb5b5]">Sport</h1>
                                        <Image
                                            src="/icon(1).svg"
                                            alt="bar"
                                            width={5}
                                            height={10}
                                        />
                                    </div>
                                    <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                        <h1 className="hover:text-[#dbb5b5]">Elegant</h1>
                                        <Image
                                            src="/icon(1).svg"
                                            alt="bar"
                                            width={5}
                                            height={10}
                                        />
                                    </div>
                                    <div className="flex cursor-pointer m-auto justify-between w-[230px] h-[100%]">
                                        <h1 className="hover:text-[#dbb5b5]">Formal (evening)</h1>
                                        <Image
                                            src="/icon(1).svg"
                                            alt="bar"
                                            width={5}
                                            height={10}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[895px] h-[100%] pt-[50px]">
                        <div className="flex justify-between">
                            <h1 className="text-[22px] font-semibold">Women’s Clothing</h1>
                            <div className="flex gap-[25px]">
                                <h1 className="text-[22px] font-semibold text-[#8A33FD]">New</h1>
                                <h1 className="text-[22px] font-semibold">Recommended</h1>
                            </div>
                        </div>
                        <div className="flex flex-wrap pt-[50px] justify-between">
                        {data.map((item) =>(
                            <a key={item.id} href={item.id}>
                                <div className="w-[282px] justify-between items-center text-center h-[440px] border-[1px] rounded-[12px] flex gap-[8px] flex-col">
                                    <img className="w-[250px] h-[300px]" src={item.image} alt="images" />
                                    <p>{item.title}</p>
                                    <div className="">
                                        <div className="">
                                        </div>
                                        <button className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">${item.price}</button>
                                    </div>
                                </div>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="pt-[92px] flex items-center gap-[20px]">
                    <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
                    <h1 className="font-semibold text-[34px]">Clothing for Women Online in India</h1>
                </div>
                <div className="pl-[21px]">
                    <h1 className="text-[#807D7E] text-[20px] font-semibold pt-[30px]">Reexplore Women's Clothing Collection Online at Euphoria</h1>
                    <p className="text-[#807D7E] text-[20px] font-normal pt-[25px]">Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel, <span className="font-semibold text-[#807D7E] text-[20px]">Euphoria</span> has closet of Women Collection covered with the latest and best designs of Women's Clothing Online.</p>
                    <p className="text-[#807D7E] text-[20px] font-normal pt-[20px]">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. </p>
                    <h1 className="text-[#807D7E] text-[20px] font-semibold pt-[25px]">One-Stop Destination to Shop Every Clothing for Women: Euphoria</h1>
                    <p className="text-[#807D7E] text-[20px] font-normal pt-[25px]">Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit. Concerning this, <span className="font-semibold text-[#807D7E] text-[20px]">Euphoria</span> has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes.</p>
                    <p className="text-[#807D7E] text-[20px] font-normal pt-[20px]">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium material and elegant design that you are always seeking for. Basically,</p>
                    <h1 className="text-[#807D7E] text-[20px] font-semibold pt-[20px]">See More</h1>
                </div>
                <div className="pt-[92px] flex items-center gap-[20px]">
                    <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
                    <h1 className="font-semibold text-[34px]">Buy Women's Clothing at Best Price</h1>
                </div>
                <div className="mt-[50px] mb-[100px] flex ml-[21px] max-w-[1220px] h-[1080px] bg-[#F6F6F6]">
                    <Image
                        src="/png/Frame114.png"
                        alt="images"
                        width={1220}
                        height={1080}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}