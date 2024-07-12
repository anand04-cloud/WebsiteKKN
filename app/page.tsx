"use client";
import React, { useState } from "react";
import Current from "./components/Current";
import Input from "./components/Input";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
import Image from "next/image";

/* Import Logo */
import logo1 from '../public/kkn.png';
import logo2 from '../public/stmkg.png';

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=538023bd3c43455084733202231905&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem] ">
        <h2 className="text-6xl font-extrabold mb-2 tracking-wide text-green-200 drop-shadow-xl animate-pulse ">
          SELAMAT DATANG DI PICU  
        </h2>
        <p className="text-4xl mb-32 text-green-300 drop-shadow-xl animate-bounce 1s infinite">
          Pusat Informasi Cuaca
        </p>
        <p className="text-xl animate-none 5s cubic-bezier(0, 0, 0.2, 1) infinite">
          Masukkan Kota/Kabupaten untuk mendapatkan Prakiraan Cuaca
        </p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Kota Tidak di Temukan</h2>
        <p className="text-xl">Silahkan tuliskan kota/kabupaten dengan benar</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url('/ponbet.jpg')` }}
    >
      <div className="bg-black/50 w-full rounded-lg flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-6">
          <Input handleSearch={handleSearch} setLocation={setLocation} className="w-1/2 md:w-1/3" />
          <h1 className="text-white text-5xl py-2 px-4 rounded-xl italic font-extrabold flex items-center gap-4">
            <Image src={logo1} alt="Logo Kiri" width={50} height={50} />
            PKM-KKN UNIT 4 STMKG
            <Image src={logo2} alt="Logo Kanan" width={50} height={50} />
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
}
