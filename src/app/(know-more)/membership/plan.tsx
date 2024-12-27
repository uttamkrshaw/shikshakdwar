"use client"
import React from 'react'
const Plan = () => {
    const [open, setOpen] = React.useState(false);
    // List Of All Profile :- Parent, Teacher, Student, School, Corporate, Ngo
    const [profile, setProfile] = React.useState('Corporate')
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Membership Plan</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Elevate your teaching practice and empower your students with a Shikshakdwar Annual Membership! Unlock the benefits and Gain access to a wealth of resources designed to enhance your professional development and classroom experience.</p>
                    </div>
                    <div className="px-6 sm:px-10 lg:px-48 pt-15">
                        <div className="my-20 ">
                            <h3 className="text-green-950 pb-3  text-3xl font-medium text-center">Here`s what awaits you:</h3>
                            <ul className="space-y-2 leading-relaxed list-disc list-inside lg:text-xl text-base">
                                <li>
                                    <span className="text-[#002060] font-bold">Exclusive Discounts: </span>
                                    Enjoy special offers on all Shikshakdwar workshops, partnered events, and corporate training programs.                            </li>
                                <li>
                                    <span className="text-[#002060] font-bold">Sustainable Learning: </span>
                                    Explore a curated selection of courses and training focused on sustainable practices for the future.

                                </li>
                                <li>
                                    <span className="text-[#002060] font-bold">Continuous Growth: </span>
                                    Stay ahead of the curve with access to the latest educational trends and teaching methodologies.
                                </li>
                                <li>
                                    <span className="text-[#002060] font-bold">Connect and Collaborate: </span>
                                    Network with a vibrant community of educators at exclusive member events.
                                </li>
                                <li>
                                    <span className="text-[#002060] font-bold">Membership Advantage: </span>
                                    Get priority awareness of new resources and opportunities throughout the year.
                                </li>

                            </ul>
                            <h4 className="pb-3 pt-2 text-2xl font-medium text-center">Invest in your growth and become a member today at <span className='text-green-950'><a href="http://www.shikshakdwar.com" target="_blank" rel="noopener noreferrer">www.shikshakdwar.com</a></span> </h4>
                            <h4 className="pb-3 pt-2  text-2xl font-medium text-center">Together, let`s shape the future of education!</h4>

                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "20px auto", flexWrap: "wrap" }}>
                        <div style={{ textAlign: "center", padding: "20px", margin: "10px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}>
                            <button
                                onClick={() => setProfile('Parent')}
                                type="button"
                                className="btn btn-info btnCorporate wow animate__animated"
                                style={{ width: "100px", height: "100px", margin: "auto", }}
                            >
                                <div className='flex flex-col'>
                                    <img src="/image/membership/parents.svg" alt="" />
                                    <span style={{ color: "#194998", fontWeight: "bold", textAlign: "center" }}>Corporate</span>
                                </div>
                            </button>
                        </div>
                        <div style={{ textAlign: "center", padding: "20px", margin: "10px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}>
                            <button
                                onClick={() => setProfile('Teacher')}
                                type="button"
                                className="btn btn-info btnCorporate wow animate__animated"
                                style={{ width: "100px", height: "100px", margin: "auto", }}
                            >
                                <div className='flex flex-col'>
                                    <img src="/image/membership/teacher.svg" alt="" />
                                    <span style={{ color: "#194998", fontWeight: "bold", textAlign: "center" }}>Corporate</span>
                                </div>
                            </button>
                        </div>
                        <div style={{ textAlign: "center", padding: "20px", margin: "10px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}>
                            <button
                                onClick={() => setProfile('School')}
                                type="button"
                                className="btn btn-info btnCorporate wow animate__animated"
                                style={{ width: "100px", height: "100px", margin: "auto", }}
                            >
                                <div className='flex flex-col'>
                                    <img src="/image/membership/school.svg" alt="" />
                                    <span style={{ color: "#194998", fontWeight: "bold", textAlign: "center" }}>Corporate</span>
                                </div>
                            </button>
                        </div>
                        <div style={{ textAlign: "center", padding: "20px", margin: "10px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}>
                            <button
                                onClick={() => setProfile('Ngo')}
                                type="button"
                                className="btn btn-info btnCorporate wow animate__animated"
                                style={{ width: "100px", height: "100px", margin: "auto", }}
                            >
                                <div className='flex flex-col'>
                                    <img src="/image/membership/ngo.svg" alt="" />
                                    <span style={{ color: "#194998", fontWeight: "bold", textAlign: "center" }}>Corporate</span>
                                </div>
                            </button>
                        </div>
                        <div style={{ textAlign: "center", padding: "20px", margin: "10px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}>
                            <button
                                onClick={() => setProfile('Corporate')}
                                type="button"
                                className="btn btn-info btnCorporate wow animate__animated"
                                style={{ width: "100px", height: "100px", margin: "auto", }}
                            >
                                <div className='flex flex-col'>
                                    <img src="/image/membership/corporate.svg" alt="" />
                                    <span style={{ color: "#194998", fontWeight: "bold", textAlign: "center" }}>Corporate</span>
                                </div>
                            </button>
                        </div>
                    </div>





                    <div className="space-y-8 m-auto lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0" style={{border: '1px solid #194998', padding: '10px', borderRadius: '10px'}}>
                        {/* <!-- Pricing Card --> */}
                        {
                            profile === 'Parent' && (<>
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">PLAN A</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Invest in your childrens success by partnering and collaborating with pre-primary and primary educators with benefits.</p>
                                    <h3 className="mb-4 text-2xl font-semibold">Get your membership today!</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration INR 1750/- * Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee INR 3990/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration USD 25/- Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee USD 150/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-green-950">What is Included</h3>
                                    <p className="font-light text-gray-500 sm:text-lg">Your membership period : Two Year</p>
                                    <p className="font-light text-red-700 sm:text-lg">Life time membership (Educator) - Rest Best Offers</p>
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>ONE NO-COST Educator workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>05% Off</strong> on all Shikshakdwar workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10 % Off</strong> on all Workshops during Conference and partnered event of Shikshakdwar</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span><strong className='font-bold text-blue-gray-700'>10% Off</strong> for students workshops during events of Shikshakdwar
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>If you are interested to do courses - Groups- kindly get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*On Academic Professional programs of Shikshakdwar,<strong className='font-bold text-blue-gray-700'></strong> Get 10% Off on Course or for package deal, kindly get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*One parent Workshop FOC (Online)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>New benefits (if any) to parents during the membership period, will be intimated & updated by email
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*Future Talk with parents on selected topics
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Parents if interested can volunteer during the events
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>A package of learning courses ( One time)* Free and is non-transferable: DIGITAL MKTG, PYTHON,JAVA,GST,MS OFFICE
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>HealthCare Online with Dietician cum Nutritionist - On Paid basis (30-45 minutes) Optional
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-red-700'>Live Webinars
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Option to pay by QR Code/ Google Pay / Debit Card / Credit Card
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*The membership will be issued in personal name only
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>School ID CARD mandatory*
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-700'>Group Discounts: 10 or more people in Teacher Training or Online
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-700'>workshop, wwill be delighted & eligible for a group discount.
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-green-950'>If Parents are shikshak- Teacher as Senior Citizen, pls get in touch
                                            </span>
                                        </li>

                                    </ul>
                                    <a href="#" className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Confirm Your Selection</a>
                                </div>
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">PLAN B</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Invest in your childrens success by partnering and collaborating with pre-primary and primary educators with benefits.</p>
                                    <h3 className="mb-4 text-2xl font-semibold">Get your membership today!</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration INR 1750/- * Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee INR 8990/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration USD 25/- Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee USD 375/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-green-950">What is Included</h3>
                                    <p className="font-light text-gray-500 sm:text-lg">Your membership period : Three Year</p>
                                    <p className="font-light text-red-700 sm:text-lg">Life time membership (Educator) - Rest Best Offers</p>
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>ONE NO-COST Educator workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10% Off</strong> on all Shikshakdwar workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10 % Off</strong> on all Workshops during Conference and partnered event of Shikshakdwar</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span><strong className='font-bold text-blue-gray-700'>10% Off</strong> for students workshops during events of Shikshakdwar
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>If you are interested to do courses - Groups- kindly get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*On Academic Professional programs of Shikshakdwar,<strong className='font-bold text-blue-gray-700'></strong> Get 10% Off on Course or for package deal, kindly get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*Five parent Workshop FOC (Online)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>New benefits (if any) to parents during the membership period, will be intimated & updated by email
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*Future Talk with parents on selected topics
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Parents if interested can volunteer during the events
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>A package of learning courses ( One time)* Free and is non-transferable: DIGITAL MKTG, PYTHON,JAVA,GST,MS OFFICE
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>HealthCare Online with Dietician cum Nutritionist - On Paid basis (30-45 minutes) Optional
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-red-700'>Live Webinars
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Option to pay by QR Code/ Google Pay / Debit Card / Credit Card
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*The membership will be issued in personal name only
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>School ID CARD mandatory*
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-700'>Group Discounts: 10 or more people in Teacher Training or Online
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-700'>workshop, wwill be delighted & eligible for a group discount.
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-green-950'>If Parents are shikshak- Teacher as Senior Citizen, pls get in touch
                                            </span>
                                        </li>

                                    </ul>
                                    <a href="#" className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Confirm Your Selection</a>
                                </div>
                            </>
                            )
                        }
                        {
                            profile === 'Teacher' && (<>
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">PLAN A</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Invest in your childrens success by partnering and collaborating with pre-primary and primary educators with benefits.</p>
                                    <h3 className="mb-4 text-2xl font-semibold">Get your membership today!</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration INR 1750/- * Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee INR 5995/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration USD 25/- Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee USD 150/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-green-950">What is Included</h3>
                                    <p className="font-light text-gray-500 sm:text-lg">Your membership period : Two Year</p>
                                    <p className="font-light text-red-700 sm:text-lg">Life time membership (Educator) - Rest Best Offers</p>
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>ONE NO-COST Educator workshop/year</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10% Off</strong> on all Shikshakdwar workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10 % Off</strong> on all Workshops during Conference and partnered event of Shikshakdwar</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span><strong className='font-bold text-blue-gray-700'>10% Off</strong> for students workshops during events of Shikshakdwar
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>If you are interested to do courses - Groups- kindly get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*On PDP programs of Shikshakdwar, Educators Get<strong className='font-bold text-blue-gray-700'>10% Off on Course</strong>
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>One NO-COST Certified Parent Workshop (Online)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>New benefits (if any) to parents during the membership period, will be intimated & updated by email
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>A package of learning courses ( One time)* Free and is non-transferable: DIGITAL MKTG, PYTHON,JAVA,GST,MS OFFICE
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Teacher if interested can volunteer during the events
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-red-700'>Live Webinars
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>HealthCare Online with Dietician cum Nutritionist - On Paid basis (30-45 minutes) Optional
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Option to pay by QR Code/ Google Pay / Debit Card / Credit Card
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*The membership will be issued in personal name only
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>School ID CARD mandatory*
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-700'>Group Discounts: 10 or more people in Teacher Training or Online
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-700'>workshop, wwill be delighted & eligible for a group discount.
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-green-950'>If Parents are shikshak- Teacher as Senior Citizen, pls get in touch
                                            </span>
                                        </li>

                                    </ul>
                                    <a href="#" className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Confirm Your Selection</a>
                                </div>
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">PLAN B</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Invest in your childrens success by partnering and collaborating with pre-primary and primary educators with benefits.</p>
                                    <h3 className="mb-4 text-2xl font-semibold">Get your membership today!</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration INR 1750/- * Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee INR 13990/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration USD 25/- Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee USD 560/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-green-950">What is Included</h3>
                                    <p className="font-light text-gray-500 sm:text-lg">Your membership period : Five Year</p>
                                    <p className="font-light text-red-700 sm:text-lg">Life time membership (Educator) - Rest Best Offers</p>
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>ONE NO-COST Educator workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10% Off</strong> on all Shikshakdwar workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10 % Off</strong> on all Workshops during Conference and partnered event of Shikshakdwar</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span><strong className='font-bold text-blue-gray-700'>10% Off</strong> for students workshops during events of Shikshakdwar
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>If you are interested to do courses - Groups- kindly get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*On PDP programs of Shikshakdwar, Educators get<strong className='font-bold text-blue-gray-700'> Get 15% Off on Course </strong>
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-800 font-bold'>One NO-COST Certified Parent Workshop (Online)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>New benefits (if any) to parents during the membership period, will be intimated & updated by email
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*Future Talk For members on classroom management
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>A package of learning courses ( One time)* Free and is non-transferable: DIGITAL MKTG, PYTHON,JAVA,GST,MS OFFICE
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Teacher if interested can volunteer during the events
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-red-700'>Live Webinars
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>HealthCare Online with Dietician cum Nutritionist - On Paid basis (30-45 minutes) Optional
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Option to pay by QR Code/ Google Pay / Debit Card / Credit Card
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>*The membership will be issued in personal name only
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>School ID CARD mandatory*
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-700'>Group Discounts: 10 or more people in Teacher Training or Online
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-blue-700'>workshop, will be delighted & eligible for a group discount.
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-green-950'>If shikshak - eacher is a Senior Citizen, pls get in touch
                                            </span>
                                        </li>

                                    </ul>
                                    <a href="#" className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Confirm Your Selection</a>
                                </div>
                            </>
                            )
                        }
                        {
                            profile === 'School' && (<>
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">PLAN A</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Invest in your childrens success by partnering and collaborating with pre-primary and primary educators with benefits.</p>
                                    <h3 className="mb-4 text-2xl font-semibold">Get your membership today!</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration INR 2250/- * Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee INR 9990/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration USD 100/- Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee USD 300/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-green-950">What is Included</h3>
                                    <p className="font-light text-gray-500 sm:text-lg">Your membership period : One Year</p>
                                    <p className="font-light text-red-700 sm:text-lg">School savings on Membership Fee is Zero - Bigger Savings : for School team</p>
                                    <p className="font-light text-red-700 sm:text-lg">School's Logo on website till the time membership is active </p>

                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>ONE NO-COST CERTIFIED workshop per year</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10% Off</strong> on all Shikshakdwar workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10 % Off</strong> on all Workshops during Conference and partnered event of Shikshakdwar</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span><strong className='font-bold text-blue-gray-700'>15% Off</strong> for students workshops during events of Shikshakdwar
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On courses for educators get upto 05%* off on course fee on purchase of one course,for groups kindly get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On purchase of three courses or more educator can get upto <strong className='font-bold text-blue-gray-700'>12% Off</strong>(One time purchase MRP)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Get Certified your school on Carbon Footprint and Earn a Certificate for your school from an Internationally Accredited Organization thru Shikshakdwar with 10% Off on Audit Fee on Sustainable Climate.
                                                purchase of three courses or more educator can get upto <strong className='font-bold text-blue-gray-700'>12% Off</strong>(One time purchase MRP)
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>Sustainable Future Green School
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On Professional Development Program, Educators get 10% Off for One & 17%* Off on Three or more Course ( One time purchase)*
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>One NO-COST CERTIFIED Workshop for parents (Online)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On adding 2 or more branches of same school 02 additional Online workshop + other benefits remains same , kindly Get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Future Talk for members on classroom management
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>Principals Name on Shikshakdwar webportal
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>HealthCare with Dietitican cum Nutritionist Online Seminar for teachers group On PAID basis & if educators would like to have 1:1 each sitting kindly get in touch
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>A package of learning courses ( One time)* ZERO COST basis and is non-transferable: DIGITAL MKTG, PYTHON,JAVA,GST,MS OFFICE
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Teacher if interested can volunteer us during the events
                                            </span>
                                        </li>


                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-red-700'>Live Webinars
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Option to pay by QR Code/ Google Pay / Debit Card / Credit Card
                                            </span>
                                        </li>
                                    </ul>
                                    <a href="#" className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Confirm Your Selection</a>
                                </div>
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">PLAN B</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Invest in your childrens success by partnering and collaborating with pre-primary and primary educators with benefits.</p>
                                    <h3 className="mb-4 text-2xl font-semibold">Get your membership today!</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration INR 2250/- * Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee INR 27990/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration USD 100/- Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee USD 750/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-green-950">What is Included</h3>
                                    <p className="font-light text-gray-500 sm:text-lg">Your membership period : Four Year</p>
                                    <p className="font-light text-red-700 sm:text-lg">Life time membership (School) - Rest Best Offers and refer to friends</p>
                                    <p className="font-light text-red-700 sm:text-lg">School's Logo on website till the time membership is active </p>

                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>08 NO-COST CERTFIED Educator Workshops -02 each yr                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10% Off</strong> on all Shikshakdwar workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10 % Off</strong> on all Workshops during Conference and partnered event of Shikshakdwar</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span><strong className='font-bold text-blue-gray-700'>20% Off</strong> for students workshops during events of Shikshakdwar
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On courses for educators get upto 10%* off on course fee on purchase of one course,for groups kindly get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On purchase of three courses or more educator can get upto <strong className='font-bold text-blue-gray-700'>17% Off</strong>(One time purchase MRP)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Get Certified your school on Carbon Footprint and Earn a Certificate for your school from an Internationally Accredited Organization thru Shikshakdwar with 10% Off on Audit Fee on Sustainable Climate.
                                                purchase of three courses or more educator can get upto <strong className='font-bold text-blue-gray-700'>10% Off</strong>(One time purchase MRP)
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>Sustainable Future Green School
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On Professional Development Program, Educators get 10% Off for One & 20%* Off on Three or more Course ( One time purchase)*
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>One NO-COST CERTIFIED Workshop for parents (Online)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On adding 2 or more branches of same school 02 additional Online workshop + other benefits remains same , kindly Get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Future Talk for members on classroom management
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>Principals Name on Shikshakdwar webportal
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>HealthCare with Dietitican cum Nutritionist Online Seminar for teachers group On PAID basis & if educators would like to have 1:1 each sitting kindly get in touch
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>A package of learning courses ( One time)* ZERO COST basis and is non-transferable: DIGITAL MKTG, PYTHON,JAVA,GST,MS OFFICE
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Teacher if interested can volunteer us during the events
                                            </span>
                                        </li>


                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-red-700'>Live Webinars
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Option to pay by QR Code/ Google Pay / Debit Card / Credit Card
                                            </span>
                                        </li>
                                    </ul>
                                    <a href="#" className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Confirm Your Selection</a>
                                </div>
                            </>
                            )
                        }
                        {
                            profile === 'Ngo' && (<>
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">NGO</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Invest in your childrens success by partnering and collaborating with pre-primary and primary educators with benefits.</p>
                                    <h3 className="mb-4 text-2xl font-semibold">Get your membership today!</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">ZERO COST</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-green-950">What is Included</h3>
                                    <p className="font-light text-gray-500 sm:text-lg">Your membership period : Lifetime</p>
                                    <p className="font-light text-red-700 sm:text-lg">NGO presence on website                                    </p>

                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>TWO NO-COST CERTFIED Educator Workshops per year                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>01 Pass</strong> for Conference and partnered events</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>Free</strong> Partcipation on Students Activities*</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Educator (if any) interested can volunteer during the shikshakdwar events -Vision Threads
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>Live Webinars session</span>                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Special Offer on all Shikshakdwar workshop                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Special Offers for students workshops during events of Shikshakdwar
                                            </span>                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Educator (if any) interested to do courses for self, kindly get in touch with us
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On PDP programs of Shikshakdwar for self, Educators can get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-green-950 font-semibold'>Interested to Partner with Shikshakdwar, kindly get in touch with us
                                            </span>
                                        </li>
                                    </ul>
                                    <a href="#" className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Confirm Your Selection</a>
                                </div>
                            </>
                            )
                        }
                        {
                            profile === 'Corporate' && (<>
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-4 text-2xl font-semibold">Corporate</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Invest in your childrens success by partnering and collaborating with pre-primary and primary educators with benefits.</p>
                                    <h3 className="mb-4 text-2xl font-semibold">Get your membership today!</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-yellow-700">Registration INR 4950/- * Only Once</h3>
                                    <h3 className="mb-4 text-2xl font-semibold">Annual Fee INR 29990/-*</h3>
                                    <h3 className="mb-4 text-2xl font-semibold text-green-950">What is Included</h3>
                                    <p className="font-light text-gray-500 sm:text-lg">Your membership period : Two Year</p>
                                    <p className="font-bold text-red-700 sm:text-lg ">Corporate savings on Membership Fee is zero - Bigger Savings : for Corporate team                                    </p>
                                    <p className="font-light text-gray-500 sm:text-lg">Your Logo on website till the time membership is active                                    </p>
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>ONE NO-COST CERTFIED Workshop per year                                       </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10% Off</strong> on all Shikshakdwar workshop</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span> <strong className='font-bold text-blue-gray-700'>10 % Off</strong> on all Workshops during Conference and partnered event of Shikshakdwar</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span><strong className='font-bold text-blue-gray-700'>10% Off</strong> for students workshops during events of Shikshakdwar
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Free Partcipation on Students Activities*
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Educator (if any) interested can volunteer during the shikshakdwar events -Vision Threads
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-blue-900'>On professional development courses for your staff to up-skill & re-skill get in touch for the group discounts *
                                            </span>
                                        </li>


                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On purchase of sustainable courses / Corporate Training for your team kindly get in touch *
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Get Certified your Office or Plant on Carbon Footprint / Net zero and Earn a Certificate from an Internationally Accredited Organization through Shikshakdwar with 05% off on Audit Fee on Sustainable Climate.
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>Sustainable/SDG/Net zero/ Carbon Footprints Speakers are invited for awareness
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>On PDP programs of Shikshakdwar for self, Educators can get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>Sustainable Future Green
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>One NO-COST CERTIFIED Workshop for staff / parents (Online)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>On adding 2 or more branches of same school 02 additional Online workshop + other benefits remains same , kindly Get in touch
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Future Talk on sustainability /carbon footprints/AI / Cyber Security in management session to generate awareness for corporate team ( video on Youtube)
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>CEO/MD's Interview on Shikshakdwar webportal
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>HealthCare with Dietitican cum Nutritionist Online Seminar for teachers group On PAID basis & if educators would like to have 1:1 each sitting kindly get in touch
                                            </span>
                                        </li>

                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='text-red-700 font-bold'>Live Webinars
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>Option to pay by QR Code/ Google Pay / Debit Card / Credit Card
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span className='font-bold text-green-950'>Under CSR - Sustainable Shows & Sponsorship possibility with extra benefits
                                            </span>
                                        </li>

                                    </ul>
                                    <a href="#" className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Confirm Your Selection</a>
                                </div>
                            </>
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Plan




