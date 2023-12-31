"use client";

import * as React from "react";
import { useState } from "react";
import CustomTextField from "@components/TextFeilds/CustomTextField";
import CustomButton from "@components/Buttons/NormalBtn";
import CustomIconButton from "@components/Buttons/CustomIconButton";
import { Google, FacebookOutlined, Twitter } from "@mui/icons-material";

export default function SignUp() {
  //states
  const [formValues, setFormValues] = useState({});

  //handler for editing form
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  //handler for submit button
  const handleButtonClick = (event: void) => {};

  //handler for social media buttons
  const handleGoogleLogin = (event: void) => {};
  const handleFaceBookLogin = (event: void) => {};
  const handleTwitterLogin = (event: void) => {};

  return (
    <div className="mx-8 my-10 mb-5 ">
      <header className="  flex flex-col gap-4 items-center ">
        <h1 className=" text-4xl font-bold">Sales Agent Sign Up</h1>
        <p className="text-center">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent perlvinar.
          Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
          Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
          lacinia. Aliquam in elementum tellus.
        </p>
      </header>

      <form className=" flex flex-col gap-5 p-10 rounded-lg sm:w-4/5 md:w-4/5 lg:w-3/5  m-auto mt-10 min-w-sm bg-gray-100 ">
        <div className=" flex gap-5 ">
          <CustomTextField
            id="FirstName"
            label="First Name"
            type="text"
            name="FirstName"
            onChange={handleInputChange}
            width="50%"
          />

          <CustomTextField
            id="LastName"
            label="Last Name"
            type="text"
            name="LastName"
            onChange={handleInputChange}
            width="50%"
          />
        </div>
        <div className=" flex flex-col gap-5 ">
          <CustomTextField
            id="Email"
            label="Email"
            name="Email"
            type="text"
            onChange={handleInputChange}
          />
          <CustomTextField
            id="Password"
            label="Password"
            type="password"
            name="Password"
            onChange={handleInputChange}
            width="100%"
          />
          <CustomTextField
            id="ConfirmPassword"
            label="Confirm Password"
            type="password"
            name="ConfirmPassword"
            onChange={handleInputChange}
            width="100%"
          />
        </div>
        <CustomButton
          onClick={handleButtonClick}
          fullWidth
          variant="contained"
          color="primary"
          backgroundColor="#48D89B"
          textColor="#000"
        >
          Sign Up
        </CustomButton>

        {/* social media section */}
        <hr className="border-b-2 " />

        <div className=" flex flex-col gap-4  justify-between items-center">
          <h2>Or sign up with</h2>

          <div className="flex items-center flex-wrap gap-3 justify-center lg:justify-center w-full space-x-1  lg:flex-row md:flex-col sm:flex-col">
            <CustomIconButton
              onClick={handleGoogleLogin}
              size="large"
              startIcon={<Google />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              Google
            </CustomIconButton>
            <CustomIconButton
              onClick={handleFaceBookLogin}
              size="large"
              startIcon={<FacebookOutlined />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              FaceBook
            </CustomIconButton>
            <CustomIconButton
              onClick={handleTwitterLogin}
              size="large"
              startIcon={<Twitter />}
              backgroundColor="#fff"
              iconColor="#0F62FE"
              textColor="#0F62FE"
            >
              Twitter
            </CustomIconButton>
          </div>
        </div>
      </form>
    </div>
  );
}
