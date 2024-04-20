'use client'
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { useEffect, useState } from "react"

export default async  function Page({params}) {
    const [getdata, setGetdata]= useState([])

    async function getData() {
        const getData = ()=> {
            fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(data => setGetdata(data))
            console.log(data);
        }
    }

    const getDetailsfunc = async(id)=> {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return await res.json()
    }
    
    useEffect(()=> {
        getDetailsfunc()
        getData()
    }, [])

    const data = await getDetailsfunc(params.id)

    const addCorzinka = (data) => {
        try {
            const usersData = JSON.stringify(data);
            localStorage.setItem('corzinka', usersData);
            console.log('Veri başarıyla eklendi.');
        } catch (error) {
            console.error('Veri eklenirken bir hata oluştu:', error);
        }
    };
    
return (
    <main>
        <Navbar/>
        <div className="m-auto max-w-[1240px] h-[100%]">
            <div className="flex">
                <div className="w-[76px] h-[336px] mr-[34px]"></div>
                <div className="w-[520px] h-[785px] flex justify-center items-center">
                    <img src={data.image} alt={data.title}  className=""/>
                </div>
                <div className="ml-[70px] w-[550px] h-[785px] flex flex-col ">
                    <h1 className="mt-[30px]">Shop\Women\Top</h1>
                    <h1 className="text-[#3C4242] text-[34px] font-sans mt-[35px]">{data.title}</h1>
                    <div className="mt-[35px] flex gap-[25px]">
                        <div className="flex gap-[15px]">
                            {data.rating.rete <= 4.5 ? 
                                <>
                                    <Image
                                    src="/Frame1.svg"
                                    alt="images"
                                    width={131}
                                    height={23}
                                    />
                                    <p className="text-[#807D7E]">{data.rating.rate}</p>
                                </>
                                :
                                <>
                                    <Image
                                    src="/Frame2.svg"
                                    alt="images"
                                    width={131}
                                    height={23}
                                    />
                                    <p className="text-[#807D7E]">{data.rating.rate}</p>
                                </>}
                        </div>
                        <div className="flex gap-[15px]">
                            <Image
                            src="/comment.svg"
                            alt="images"
                            width={20}
                            height={18}
                            />
                            <p>120 comment</p>
                        </div>
                    </div>
                    <div className="flex gap-[15px] pt-[35px]">
                        <h1 className="text-[#3F4646] text-[18px]">Select Size</h1>
                        <h1 className="text-[18px] text-[#807D7E]">Size Guide</h1>
                        <Image
                            src="/arrow(1).svg"
                            alt="images"
                            width={20}
                            height={18}
                        />
                    </div>
                    <div className="flex mt-[25px] mb-[40px] gap-[20px]">
                        <button className="bg-[#ffff] hover:bg-[#3C4242] hover:text-white border-[1px] rounded-[12px] w-[37px] h-[37px]">XS</button>
                        <button className="bg-[#ffff] hover:bg-[#3C4242] hover:text-white border-[1px] rounded-[12px] w-[37px] h-[37px]">S</button>
                        <button className="bg-[#ffff] hover:bg-[#3C4242] hover:text-white border-[1px] rounded-[12px] w-[37px] h-[37px]">M</button>
                        <button className="bg-[#ffff] hover:bg-[#3C4242] hover:text-white border-[1px] rounded-[12px] w-[37px] h-[37px]">L</button>
                        <button className="bg-[#ffff] hover:bg-[#3C4242] hover:text-white border-[1px] rounded-[12px] w-[37px] h-[37px]">XL</button>
                    </div>
                    <h1>Colours Available</h1>
                    <div className="flex gap-[20px] mt-[30px]">
                        <div className="w-[22px] h-[22px] rounded-full cursor-pointer bg-black"></div>
                        <div className="w-[22px] h-[22px] rounded-full cursor-pointer bg-yellow-400"></div>
                        <div className="w-[22px] h-[22px] rounded-full cursor-pointer bg-[#EB84B0]"></div>
                        <div className="w-[22px] h-[22px] rounded-full cursor-pointer bg-red-800"></div>
                    </div>
                    <div className="pb-[37px] max-w-[534px] border-b-[1px] border-[#BEBCBD] flex mt-[36px] gap-[25px]">
                        <button onChange={() => addCorzinka(data)} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 font-bold w-[200px] h-[46px] bg-[#8A33FD] text-white rounded-[8px]">Add to cart</button>
                        <button onClick={() => addCorzinka(data)} className="text-bold text-[#3C4242] text-[18px] rounded-[8px] border-[1px] border-[#3C4242] w-[138px] h-[46px]">$63.00</button>
                    </div>
                    <div className="flex mt-[40px] flex-col">
                        <div className="flex gap-[26px]">
                            <div className="flex gap-[15px]">
                                <Image
                                src="/deta.svg"
                                alt="images"
                                width={44}
                                height={44}
                                />
                                <h1>Secure payment</h1>
                            </div>
                            <div className="flex gap-[15px]">
                                <Image
                                src="/deta.svg"
                                alt="images"
                                width={44}
                                height={44}
                                />
                                <h1>Size & Fit</h1>
                            </div>
                        </div>
                        <div className="mt-[26px] flex gap-[26px]">
                            <div className="flex gap-[15px]">
                                <Image
                                src="/deta.svg"
                                alt="images"
                                width={44}
                                height={44}
                                />
                                <h1>Free shipping</h1>
                            </div>
                            <div className="flex gap-[15px]">
                                <Image
                                src="/deta.svg"
                                alt="images"
                                width={44}
                                height={44}
                                />
                                <h1>Free Shipping & Returns</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-[20px]">
                <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
                <h1 className="font-semibold text-[34px]">Product Description</h1>
            </div>
            <div className="flex justify-between">
                <div className="w-[620px]">
                    <Image
                        src="/png/producs.png"
                        alt="images"
                        width={491}
                        height={40}
                    />
                    <Image
                        src="/png/product tabel.png"
                        alt="images"
                        width={618}
                        height={185}
                    />
                </div>
                <div className="w-[320px] h-[328px] flex justify-center items-center">
                    <img src={data.image} alt={data.title}  className=""/>
                </div>
            </div>
            <div className="flex items-center gap-[20px]">
                <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
                <h1 className="font-semibold text-[34px]">Similar Products</h1>
            </div>
            <div className="flex flex-wrap pt-[50px] justify-between">
                {getdata.map((item) =>(
                    <a href={item.id}>
                        <div key={item.id} className="w-[282px] justify-between items-center text-center h-[440px] border-[1px] rounded-[12px] flex gap-[8px] flex-col">
                            <img className="w-[250px] h-[300px]" src={item.image} alt="images" />
                            <p>{item.title}</p>
                            <button className="bg-[#ffff] border-[1px] rounded-[12px] w-[62px] flex items-center justify-center h-[31px]">${item.price}</button>
                        </div>
                    </a>
                ))}
            </div>
        </div>
        <Footer/>
    </main>
)
}