"use client";
import React from 'react'
import Carousel from 'react-multi-carousel'
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";


const MultiCarousel = () => {
    return (
        <>
            {/* <div className="flex flex-row md:flex-row gap-6 max-w-6xl mx-auto">
                <div className="flex flex-row items-center justify-center gap-6"> */}
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <div>

                            <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                <CardBody>
                                    <img
                                        src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                                        alt="logo"
                                        className="w-40"
                                    />
                                    <Typography variant="small" className="font-normal text-gray-500">
                                        coinbase.com
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>

                        <div>

                            <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                <CardBody>
                                    <img
                                        src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                                        alt="logo"
                                        className="w-40"
                                    />
                                    <Typography variant="small" className="font-normal text-gray-500">
                                        coinbase.com
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>

                        <div>

                            <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                <CardBody>
                                    <img
                                        src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                                        alt="logo"
                                        className="w-40"
                                    />
                                    <Typography variant="small" className="font-normal text-gray-500">
                                        coinbase.com
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>

                        <div>

                            <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                <CardBody>
                                    <img
                                        src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                                        alt="logo"
                                        className="w-40"
                                    />
                                    <Typography variant="small" className="font-normal text-gray-500">
                                        coinbase.com
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>

                        <div>

                            <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                <CardBody>
                                    <img
                                        src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                                        alt="logo"
                                        className="w-40"
                                    />
                                    <Typography variant="small" className="font-normal text-gray-500">
                                        coinbase.com
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>

                    </Carousel>
                {/* </div>
            </div> */}


        </>
    )
}

export default MultiCarousel