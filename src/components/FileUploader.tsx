import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaPinterest, FaSearch } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { MdMenu } from "react-icons/md";
import { Input } from "@heroui/input";
import { BsStars } from "react-icons/bs";
const FileUploader: React.FC = () => {
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  useEffect(() => {
    // Example animation on load
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <BsStars size={24} color="black" />
        <div className="gap-1">
          <span className="text-[12px] font-bold text-black italic flex">
            Wed
            <span className="text-xl font-bold text-indigo-600 italic">
              Uploaders
            </span>
          </span>
        </div>
        <div className="flex max-w-[100px] items-center gap-2 bg-gray-100 rounded-lg p-2">
          <FaSearch name="search" className="text-gray-500 " />
          <Input
            placeholder="Search..."
            className="border-none bg-transparent w-[100px]"
          />
        </div>
        <MdMenu name="auto-awesome" className="text-indigo-500 text-2xl" />
      </div>
      <div className="flex-grow">
        <Card className="p-4 rounded-2xl h-[300px] border border-[#b8bbb8] mt-3">
          <div className="flex flex-col items-center m-auto">
            <span className="text-gray-600 mt-2 text-[13px] mb-4">
            UPLOAD PICTURES OR VIDEOS YOU WANT TO SHARE. REMAIN ON PAGE UNTIL ALL UPLOADS COMPLETE.
            </span>
            <label className="cursor-pointer bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4">
              Choose File
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {imageName && (
              <p className="text-gray-700">Selected: {imageName}</p>
            )}
            <p className="text-gray-500 text-sm mt-2">
              Max file size 1GB.{" "}
              <a href="https://signup.example.com" className="text-blue-500">
                Sign Up
              </a>{" "}
              for more.
            </p>
          </div>
        </Card>

        <div className="mt-6 space-y-4">
          <Card className="p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold">Works Anywhere</h2>
            <p className="text-gray-600 mt-2">
              Works on Windows, Mac, Linux, or mobile devices. Upload and
              convert files easily.
            </p>
          </Card>

          <Card className="p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold">Convert Any File</h2>
            <p className="text-gray-600 mt-2">
              Supports over 1500 conversions including videos, images, audio,
              and e-books.
            </p>
          </Card>

          <Card className="p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold">Privacy Guaranteed</h2>
            <p className="text-gray-600 mt-2">
              Uses 256-bit SSL encryption and auto-deletes files after a few
              hours.
            </p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="top-20 text-center text-indigo-600 font-bold p-4">
        ©2025 WEDUPLOADER
        <div className="flex justify-center gap-4 mt-2">
          <FaPinterest size={24} />
          <FaFacebook size={24} />
          <FaInstagram size={24} />
          <AiFillTikTok size={24} />
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
