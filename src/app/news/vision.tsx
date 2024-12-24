import React from 'react'

const Vision = () => {
    return (
        <>
            <div className="px-4 py-8 lg:px-16 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                    {/* Left Content */}
                    <div className="lg:w-7/12 px-6 py-8 lg:py-12">
                        <h3 className="text-3xl lg:text-4xl font-semibold text-green-950">
                            V.I.S.I.O.N
                        </h3>
                        <p className="text-gray-700 text-base lg:text-lg mt-4">
                            <strong className='text-green-950'>V.I.S.I.O.N.</strong> represents a comprehensive approach to sustainable development.
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base mt-2">
                        <strong className='text-green-950 text-xl'>V</strong>isionary Leadership is essential for guiding organizations and communities towards a sustainable future.
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base mt-2">
                        <strong className='text-green-950 text-xl'>I</strong>nnovative Ideas are crucial for developing new solutions to pressing environmental and social challenges.
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base mt-2">
                        <strong className='text-green-950 text-xl'>S</strong>ustainable Practices ensure that our actions today do not compromise the ability of future generations to meet their needs.
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base mt-2">
                        <strong className='text-green-950 text-xl'>I</strong>nclusive Communities promote social justice and equity, ensuring that everyone has an opportunity to participate in and benefit from sustainable development.
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base mt-2">
                        <strong className='text-green-950 text-xl'>O</strong>pportunity for All means that everyone, regardless of their background or circumstances, should have access to the resources and opportunities needed to thrive.
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base mt-2">
                        <strong className='text-green-950 text-xl'>N</strong>etworking and Collaboration are essential for building partnerships and sharing knowledge to address global challenges.
                        </p>

                        <p className="text-lg font-semibold text-blue-900 mt-4">
                            Why Carbon Footprinting for Institutions?
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-5/12 px-5">
                        <img
                            src="/image/news/img_128.png"
                            alt="Institution Banner"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vision