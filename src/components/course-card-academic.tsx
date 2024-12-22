import React from 'react'
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";


interface CourseCardProps {
    img: string;
    title: string;
    price: number;
    buttonLabel: string;
    link: string
}


const CourseCardAcademic = ({ img, title, price, buttonLabel, link }: CourseCardProps) => {
    return (
        <>
            <Card color="transparent" shadow={false}>
                <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
                    <Image width={1000} height={1000} src={img} alt={title} className="h-fit w-fit object-cover" />
                </CardHeader>
                <CardBody className="p-0">
                    <Typography variant="h5" className="mb-2">
                        INR :- {price}
                    </Typography>
                    <a
                        href="#"
                        className="text-blue-gray-900 transition-colors hover:text-gray-800"
                    >
                        <Typography variant="h5" className="mb-2">
                            {title}
                        </Typography>
                    </a>
                    <Link href={link}>
                        <Button color="gray" size="sm">
                            {buttonLabel}
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </>
    )
}

export default CourseCardAcademic
