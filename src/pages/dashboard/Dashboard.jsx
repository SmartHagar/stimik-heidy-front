/** @format */

import React, { useEffect } from "react";
import background from "../../assets/gereja.jpg";

const Dashboard = () => {
  return (
    <div
      className="hero min-h-screen absolute top-0 left-0 right-0 bottom-0 animate__animated animate__fadeInDown"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInLeft animate__delay-1s">
            Selamat Datang
          </h1>
          <p className="mb-5 animate__animated animate__fadeInRight animate__delay-2s text-lg">
            Website Penyewaan Gedung Serba Guna Gereja Maranatha Ardipura I-II
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
