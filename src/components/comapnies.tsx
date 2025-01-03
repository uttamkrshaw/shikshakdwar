"use client";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

export function CompaniesCards() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container !mx-auto text-center place-content-center grid">
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug lg:!text-3xl"
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
        >
          Certification Offered By
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-5xl !text-gray-500 lg:px-8 mb-10"
          placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
        >
          From innovative startups to Fortune 500 companies, our client list spans a spectrum of
          sectors, each with unique challenges that we&apos;ve successfully navigated.
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              <CardBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <img
                  src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                  alt="logo"
                  className="w-40"
                  
                />
                <Typography variant="small" className="font-normal text-gray-500" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                >
                  coinbase.com
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              <CardBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <img
                  src="https://www.material-tailwind.com/logos/logo-amazon.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  amazon.com
                </Typography>
              </CardBody>
            </Card>
          </div>
          <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
            <CardBody className="text-center" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              <img
                src="https://www.material-tailwind.com/logos/logo-netflix.svg"
                alt="logo"
                className="w-40 mx-auto"
              />
              <Typography variant="small" className="font-normal text-gray-500 mb-4" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                netflix.com
              </Typography>
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              <CardBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <img
                  src="https://www.material-tailwind.com/logos/logo-spotify.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  spotify.com
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              <CardBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <img
                  src="https://www.material-tailwind.com/logos/logo-google.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  google.com
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompaniesCards;