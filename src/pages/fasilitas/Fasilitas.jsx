/** @format */

import React, { useEffect } from "react";
import useFacility from "../../app/stores/fasilitas";

const Fasilitas = () => {
  const { facilities, getFacilities } = useFacility((state) => state);

  useEffect(() => {
    getFacilities();
  }, []);
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-2xl text-center font-bold">Daftar Fasilitas</h3>
      </div>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <td className="text-sm">No</td>
                <td className="text-sm">Nama Fasilitas</td>
                <td className="text-sm">Jumlah</td>
              </tr>
            </thead>
            <tbody>
              {facilities.map((facility, index) => (
                // if index is even, then add className "bg-gray-100"
                <tr
                  key={facility.id}
                  className={index % 2 === 1 ? "active" : ""}
                >
                  <td className="text-sm">{index + 1}</td>
                  <td className="text-sm">{facility.name}</td>
                  <td className="text-sm">{facility.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fasilitas;
