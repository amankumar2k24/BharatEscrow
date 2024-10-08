import React from 'react'
import BeImg from "../assets/Home/logo.jpg"
import { Link } from 'react-router-dom'

const Footer = () => {

    const linkList = [
        { to: "/disclaimer", text: "Disclaimer" },
        { to: "/", text: "Home", },
        { to: "/how-it-works", text: "How it works" },
        { to: "/faqs", text: "Faqs", },
        { to: "/blog", text: "Blog", },
        { to: "/contact", text: "Contact", },
        { to: "/privacy", text: "Privacy" },
    ]


    return (
        <section className='footer ' >
            <div className='flex justify-around border-b-2 border-[#e3e1dc] flex-col md:flex-row flex-wrap gap-4 p-4 md:p-10 mx-auto bg-gradient-to-r from-[#fff] to-[#096aa6]'>

                {/* left  */}
                <div className="flex pt-6 sm:pt-0 w-[200px] h-[80px] ">
                    <img
                        src={BeImg}
                        className="w-[300px] mr-3 rounded-lg"
                        alt=" Logo"
                    />
                </div>

                {/* right */}
                <div className='flex flex-col md:flex-row gap-4 text-slate-500 lg:text-white font-bold  '>
                    {/* <div className='px-0 flex-wrap  flex  gap-10 text-white font-bold '> */}
                    <div className='flex flex-col gap-2 text-2xl sm:text-3xl px-2 sm:px-10'>
                        Resources
                        <div className='flex flex-col gap-0 text-[16px]  sm:text:2xl '>
                            {linkList.map((links, index) => {
                                return (
                                    <Link to={links.to} key={index} className='hover:text-blue-600'>{links.text}</Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 text-xl sm:text-3xl px-2 sm:px-10'>
                        Contact with us
                        <div className='flex justify-start items-start flex-col gap-0 text-sm sm:text:2xl'>
                            {/* <p>Terms & Conditions</p> */}
                            <button className='hover:text-blue-600 my-2' href='#'>Facebook</button>
                            <button className='hover:text-blue-600 my-2' href='#'>Linkedin</button>
                            <button className='hover:text-blue-600 my-2' href='#'>Twitter</button>
                            <button className='hover:text-blue-600 my-2' href='#'>Instagram</button>
                            {/* <a className='hover:text-blue-600 my-2' href='#'>Facebook</a>
                            <a className='hover:text-blue-600 my-2' href='#'>Linkdin</a>
                            <a className='hover:text-blue-600 my-2' href='#'>Twitter</a>
                            <a className='hover:text-blue-600 my-2' href='#'>Instagram</a> */}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 text-xl sm:text-3xl px-2 sm:px-10'>
                        Information
                        <div className='flex flex-col gap-0 text-sm sm:text:2xl'>
                            {/* <p>Terms & Conditions</p> */}
                            <a className='hover:text-blue-600 my-2' href='tel:+8368436501'>836-843-6501</a>
                            <a className='hover:text-blue-600' href='mailto:info@bharatescrow.com'>info@bharatescrow.com</a>
                        </div>
                    </div>

                </div>

            </div>
            <div className='text-slate-700 font-semibold bg-gradient-to-r from-[#fff] to-[#096aa6] md:text-[#e3e1dc] py-2 text-center '>
                Copyright &copy; 2023 BharatEscrow
            </div>
        </section>
    )
}

export default Footer