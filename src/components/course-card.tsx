import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";


interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
  link:string
}

export function CourseCard({ img, title, desc, buttonLabel,link}: CourseCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Link href={link}>
          <Button color="gray" size="sm">
            {buttonLabel}
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default CourseCard;