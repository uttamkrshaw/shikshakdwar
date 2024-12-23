"use client";
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

interface SelfProps {
    data: any;
}

const MultiCarousel = ({ data }: SelfProps) => {
    return (
        <>
            <div className="max-w-6xl mx-auto">
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
                >
                    {data.map((imageUrl, index) => {
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