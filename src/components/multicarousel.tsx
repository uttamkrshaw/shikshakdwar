"use client";
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

interface SelfProps {
    data: { url: string }[];
    title: string
}

const MultiCarousel = ({ data, title }: SelfProps) => {
    return (
        <>
            <div className='lg:px-32 sm:px-4 overflow-hidden m-auto'>
                <h3 className="pt-1 mb-10 text-4xl font-bold m-auto">{title}</h3>
            </div>
            <div className="max-w-6xl mx-auto mt-10">
                <Carousel

                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 4,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        }
                    }}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    arrows={false}
                    infinite={true}
                    partialVisible={false}
                    dotListClass={"marginTop: 50px"}
                >
                    {data.map((imageUrl: { url: string }, index: number) => {
                        return (
                            <div className="slider p-5" key={index}>
                                <img src={imageUrl?.url} alt="movie" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default MultiCarousel