/** @format */

import React, { useEffect } from "react";
import background from "../../assets/gereja.jpg";

import useSchedule from "../../app/stores/schedule";
import moment from "moment";
// moment indonesia format
import "moment-timezone";
moment.tz.setDefault("Asia/Jayapura");
moment.locale("id", {
    weekdaysShort: ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    weekdays: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    months: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ],
    monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Ags",
        "Sep",
        "Okt",
        "Nov",
        "Des",
    ],
});

const animateDahs = () => {
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
  )
}

const Dashboard = () => {
  const { schedule, getSchedule } = useSchedule((state) => state);

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <div>
      <div className="mb-3">
        <h3 className="text-2xl text-center font-bold">Jadwal Sewa Gedung</h3>
      </div>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <td className="text-sm">No</td>
                <td className="text-sm">Nama Penyewa</td>
                <td className="text-sm">Tgl. Sewa</td>
                <td className="text-sm">Tujuan</td>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                // if index is even, then add className "bg-gray-100"
                <tr
                  key={item.id}
                  className={index % 2 === 1 ? "active" : ""}
                >
                  <td className="text-sm">{index + 1}</td>
                  <td className="text-sm">{item.tenant.first_name} {item.tenant.last_name}</td>
                  <td className="text-sm">{moment(item.date_start).format(
                            "DD MMM YYYY"
                        )} - {moment(item.date_end).format("DD MMM YYYY")}</td>
                  <td className="text-sm">{item.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
