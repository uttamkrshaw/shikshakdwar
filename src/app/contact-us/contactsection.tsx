"use client"
import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactSection() {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        {/* <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Customer Care
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography> */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src="/image/map.svg"
            alt="map"
            className="w-full h-full lg:max-h-[510px]"
            crossOrigin=""
          />
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            {/* <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
              Select Options for Business Engagement
            </Typography> */}
            <div className="flex gap-4">
              {/* <Button variant="outlined" className="max-w-fit">
                General inquiry
              </Button>
              <Button variant="outlined" className="max-w-fit">
                Product Support
              </Button> */}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                  placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}
                  crossOrigin={""}
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                  placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}
                  crossOrigin={""}
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
                placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
              >
                Contact Number
              </Typography>
              <Input
                maxLength={16}
                placeholder="e.g., +1 123-456-7890"
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                crossOrigin={""}

              />
              <Typography className="mt-2 text-xs font-normal text-blue-gray-500" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                Include your country code for international numbers.
              </Typography>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
                placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                crossOrigin={""}
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
                placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button
              className="w-full"
              color="gray"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;