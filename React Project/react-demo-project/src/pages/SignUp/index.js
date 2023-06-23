import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function SignUp() {
  return (
    <div className="flex justify-items-center m-auto bg-light-green-100 border border-2px mt-4 mb-2 w-[380px] max-w-screen-lg sm:w-70  ">
  
<div class="mx-1"></div>
<div class="my-1 "></div>
{/* <div class="mb-8 ..."></div> */}
{/* <div class="ml-2 ..."></div> */}
     <Card color="transparent" shadow={false}>
    <Typography variant="h3" color="blue-gray">
      SignUp
    </Typography>
    <Typography color="gray" className="mt-2 font-normal">
      Enter your details to register.
    </Typography>
    <form className="mt-3 mb-2 w-60 max-w-screen-lg sm:w-70">
      <div className="mb-3 flex flex-col gap-6">
        <Input size="lg" label="Name" />
        <Input size="lg" label="Email" />
        <Input type="password" size="lg" label="Password" />
      </div>
      <Checkbox
        label={
          (
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          )
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button className="mt-6" fullWidth>
        Register
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a
          href="#"
          className="font-medium text-blue-500 transition-colors hover:text-blue-700"
        >
          Sign In
        </a>
      </Typography>
    </form>
  </Card>



    </div>
  )
}
