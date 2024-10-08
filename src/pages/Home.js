import React from 'react'
import Footer from '../components/Footer'
import Box from '../components/Box'
import MSME from "../assets/Home/MSME.jpeg"
import APPIMG from "../assets/Home/appDevelopment.jpeg"
import Banner from "../assets/Home/banner.jpg"
import Ecommerce from "../assets/Home/Ecommerce.jpeg"
import Digital from "../assets/Home/Digital.jpeg"
import Freelance1 from "../assets/Home/Freelance.jpeg"
import PropertyDealing from "../assets/Home/PropertyDealing.jpeg"
import websiteDevelopment from "../assets/Home/websiteDevelopment.jpeg"
import gamingPayout from "../assets/Home/gamingPayout.png"
import FIRA from '../assets/Home/FIRA.jpeg'
import "../input.css"
import { useNavigate } from 'react-router-dom'


const Home = ({ sethomeRoutes, setIndustryRoute }) => {
    const navigate = useNavigate()

    const handleSetHomeRoute = (item) => {
        const routeCal = item?.split(' ').map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1, item.length)}`).join(" ").replaceAll(' ', "-")
        localStorage.setItem("homeRoute", routeCal)
        sethomeRoutes({ route: routeCal })
        navigate(`/${routeCal}`)
    }

    const handleSetIndustryRoutes = (items) => {
        const routeCal = items?.title?.split(' ').map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1, item.length)}`).join(" ").replaceAll(' ', "-")
        localStorage.setItem("industryRoutes", routeCal)
        setIndustryRoute({ route: routeCal })
        navigate(`/${routeCal}`)
    }

    const INDUSTRIESData = [
        { id: 0, title: "MSME", image: MSME },
        { id: 1, title: "ECOMMERCE", image: Ecommerce },
        { id: 2, title: "DIGITAL", image: Digital },
        { id: 3, title: "FREELANCER", image: Freelance1 },
        { id: 4, title: "PROPERTY DEALING", image: PropertyDealing },
        { id: 6, title: "APP DEVELOPMENT", image: APPIMG },
        { id: 7, title: "FIRA", image: FIRA },
        { id: 8, title: "WEBSITE DEVELOPMENT", image: websiteDevelopment },
        { id: 9, title: "Gaming Payout", image: gamingPayout }
    ]


    return (
        <section className='home'>
            <div className='py-36 sm:py-32 xl:py-32 m-auto flex flex-row flex-wrap items-center justify-around max-w-[1500px] px-8 gap-5 ' >
                <div className='flex justify-center flex-col gap-1 text-center xl:text-start '>
                    <div className='flex justify-center flex-col gap-1 text-center xl:text-start'>
                        <div className='homeShadingEffect flex gap-0 flex-col leading-tight'>
                            <div className='text-[33px] md:text-5xl lg:text-6xl font-bold'>
                                <span className='animated-text'>
                                    Welcome to
                                </span>
                            </div>
                            <div className='text-[33px] md:text-5xl lg:text-6xl font-bold'>
                                <span className='animated-text'>
                                    Bharat<span className='highlight-text ml-2 sm:ml-0'>&nbsp;Escrow</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className=' text-lg font-semibold text-dark pl-2'>
                        We prioritize the protection of both buyers and sellers.
                    </div>
                </div>
                <div className='max-w-[400px] md:max-w-[450px] xl:max-w-[600px] xl:h-[500px] flex justify-end'>
                    <img src={Banner} alt='bannerImg md:w-[400px] md:w-[450px] xl:w-[600px] xl:h-[500px] object-cover' />
                </div>
            </div>

            <div className='flex justify-center md:py-6 px-4 sm:px-10 gap-6 mx-auto md:gap-6 flex-wrap md:flex-nowrap ' >

                <div className='homeShadingEffect w-full h-full relative md:w-[390px] row from-[hsl(203,98%,21%)] to-[#096aa6] border border-1 border-solid border-black shadow-[#26292e] hover:shadow-black text-white px-8 py-4 rounded-2xl flex sm:gap-2 flex-col transition-all ease-in-out duration-200 sm:hover:-translate-y-1 shadow-lg mb-4' >
                    <div className='text-xl sm:text-2xl font-semibold text-blue-900 py-4'>
                        Secure Transactions
                    </div>
                    <div className='text-sm sm:text-md text-justify text-slate-700 -mt-1 pb-8'>
                        In the dynamic realm of online transactions, where trust and security are paramount, Bharat Escrow emerges as a pioneer, redefining the landscape of secure financial transactions. As a content writer delving into the world of secure transaction means, let's explore how Bharat Escrow, as a leading player in the fintech market, acts as the intermediary ensuring that every transaction processed through its escrow accounts is fortified with security.
                    </div>
                    <button
                        onClick={() => handleSetHomeRoute("Secure Transactions")}
                        className='hover:underline text-slate-700 hover:text-slate-500 absolute  bottom-4 right-8'>
                        Read more
                    </button>

                </div>

                <div className='homeShadingEffect md:w-[390px] relative border border-1 border-solid border-black shadow-[#26292e] hover:shadow-black text-white px-8 py-4 rounded-2xl flex sm:gap-2 flex-col transition-all ease-in-out duration-200 sm:hover:-translate-y-1 shadow-lg mb-4'  >
                    <div className='text-xl sm:text-2xl font-semibold text-blue-900 py-4'>
                        Reliable Intermediary
                    </div>
                    <div className='text-sm sm:text-md text-justify text-slate-700 -mt-1 pb-8' >
                        In the dynamic landscape of online transactions, where trust is the currency and security is paramount, Bharat Escrow stands tall as a beacon of reliability. As a content writer, let's delve into the realm of escrow accounts and explore how Bharat Escrow, a distinguished player in the fintech market, acts as a reliable intermediary, ensuring that every transaction processed through its platform is not just secure but built on the pillars of trust.
                    </div>
                    <button
                        onClick={() => handleSetHomeRoute("Reliable Intermediary")}
                        className='hover:underline text-slate-700 hover:text-slate-500 absolute  bottom-4 right-8'>
                        Read more
                    </button>
                </div>
            </div>


            <div className=' flex pt-28 pb-[83px] font-roboto flex-col gap-5 px-2 ' >
                <div className='shadingEffect font-bold uppercase mb-10 text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-blue-900'>
                    Industries we serve
                </div>
                <div className=' homeShadingEffect flex flex-wrap flex-shrink justify-between space-y-2 gap-4 px-2  cursor-pointer'>

                    {INDUSTRIESData.map((item) => <Box text={item.title} key={item.id} src={item.image} item={item} handleSetIndustryRoutes={handleSetIndustryRoutes} />)}
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Home