"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

const Images = (props: any) => {
  return <CldImage {...props} />;
};

export default Images;
