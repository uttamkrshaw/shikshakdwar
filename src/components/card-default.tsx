import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

interface CardDefaultProps {
    title: string;
    description: string;
}

export function CardDefault({ title, description }: CardDefaultProps) {
    return (
        <Card className="mt-6 w-96" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
            <CardHeader color="blue-gray" className="relative h-56" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <Typography variant="h5" color="blue-gray" className="mb-2" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    {title}
                </Typography>
                <Typography placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <Button placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Read More</Button>
            </CardFooter>
        </Card>
    );
}
