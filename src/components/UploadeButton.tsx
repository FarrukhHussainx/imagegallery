"use client";
import React, { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";

type UploadResult = {
  info: { public_id: String };
  event: "sucess";
};

const UploadeButton = () => {
  const [imageid, setImageId] = useState("");
  return (
    <>
      <CldUploadButton
        onUpload={(result: any) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="y7qmvmxi"
      />
      {imageid && (
        <CldImage
          width="960"
          height="600"
          src={imageid}
       
          sizes="100vw"
          alt="Description of my image"
        />
      )}
      <Button className="bg-red-800">Click me</Button>
    </>
  );
};

export default UploadeButton;
