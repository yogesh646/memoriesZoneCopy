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
  const backy = [
    {
      img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/284/159/new_large/Snapinsta.app_271668865_894242211287093_3125084565409294240_n_1080.jpg?1688631193",
    },
    {
      img: "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://thumbs.dreamstime.com/b/indian-marriage-function-things-mangalyam-125749037.jpg",
    },
    {
      img: "https://thumbs.dreamstime.com/b/south-indian-bride-thaali-mangalyam-groom-traditional-marriage-ceremony-109499425.jpg",
    },
  ];
  const backys = [
    {
      img: "https://i.pinimg.com/736x/ee/09/fd/ee09fd9754ca2989096cac1cd0d45df8.jpg",
    },
    {
      img: "https://i.pinimg.com/originals/11/b0/e5/11b0e5fa3a103c871eca8f79a9e26033.jpg",
    },
    {
      img: "https://thumbs.dreamstime.com/b/mangalyam-traditional-hindu-wedding-close-up-thalli-99275928.jpg",
    },
    {
      img: "https://live.staticflickr.com/1943/45297308942_b7eb1012c1_b.jpg",
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.cypMYIx-W931Pk_jneYTHQHaE7&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse4.mm.bing.net/th?id=OIP.T0sU1cZk9kRvBeZU0YWjwAAAAA&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.HT4a71eVLEMZ5CapuN9YfQHaE8&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.hbPpc2NMzsjRCv_lFip2MwHaE8&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse4.mm.bing.net/th?id=OIP.VRrZSo4mPa3IAtgU5SflQAHaE8&pid=Api&P=0&h=180",
    },
  ];
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
        <Card className="p-4 rounded-2xl h-[400px] border border-[#b8bbb8] mt-3 bg-[url('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
          <div className="flex flex-col items-center m-auto">
            <span className="text-white">
              Jane & Joe - Example Album With Premium Features Enabled
            </span>
            <Card
              className={`p-4 rounded-2xl  imageName ? "h-[300px]" : "h-[200px]" border border-[#b8bbb8] mt-10 backdrop-blur-sm bg-white/30`}
            >
              <span className="text-white mt-2 text-[13px] mb-4">
                UPLOAD PICTURES OR VIDEOS YOU WANT TO SHARE. REMAIN ON PAGE
                UNTIL ALL UPLOADS COMPLETE.
              </span>
              <label className="cursor-pointer bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4 ">
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {imageName && <p className="text-white">Selected: {imageName}</p>}
              <div className="text-white text-[12px] mt-2">
                <div className="flex flex-col">
                  <span className="text-white justify-center align-middle text-center"> Jump to Gallery</span>
                  <span
                    href="https://signup.example.com"
                    className="text-blue-800 justify-center align-middle text-center mt-2"
                  >
                    HOW TO UPLOAD?
                  </span>
                </div>
                <div className="grid grid-cols-3 mt-4 mx-auto ml-4 ">
                  <span className="text-[9px]">
                    <a className="bg-amber-300 rounded-2xl mr-1">01</a>
                    Click Browse Files
                  </span>
                  <span className="text-[9px]">
                    <a className="bg-amber-300 rounded-2xl mr-1">02</a>
                    Select Your Files
                  </span>
                  <span className="text-[9px]">
                    <a className="bg-amber-300 rounded-2xl mr-1">03</a>
                    Click Upload
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        <div className="mt-6 space-y-4">
          <Card className="flex-1 p-1  h-[400px] border border-[#b8bbb8] mt-0 grid grid-cols-3 ml-0 gap-0">
            {backy.slice(0, 10).map((image, index) => {
              const heights = [
                "h-[100px]",
                "h-[150px]",
                "h-[120px] w-[110px]",
                "h-[100px] ",
                "h-[100px] ",
                "h-[100px]  ",
                "h-[100px] ",
                "h-[80px] ",
                "h-[106px] ",
              ];
              return (
                <Card
                  key={index}
                  className={`rounded-xl w-[100px] ${heights[index]} border border-[#b8bbb8] bg-cover bg-center`}
                  style={{ backgroundImage: `url(${image.img})` }}
                />
              );
            })}
          </Card>
          <Card className="flex-1 p-1  h-[400px] border border-[#b8bbb8] mt-0 grid grid-cols-3 ml-0 gap-0">
            {backys.slice(0, 10).map((image, index) => {
              const heights = [
                "h-[100px]",
                "h-[100px]",
                "h-[120px] w-[110px]",
                "h-[100px]",
                "h-[150px]",
                "h-[100px]",
                "h-[100px]",
                "h-[80px]",
                "h-[106px]",
              ];
              return (
                <Card
                  key={index}
                  className={`rounded-xl w-[100px] ${heights[index]} border border-[#b8bbb8] bg-cover bg-center`}
                  style={{ backgroundImage: `url(${image.img})` }}
                />
              );
            })}
          </Card>
          <Card className="p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold">Works Anywhere</h2>
            <p className="text-gray-600 mt-2">
              Works on Windows, Macs, Linux, or mobile devices. Upload and
              convert files easily on system perfectly.
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
