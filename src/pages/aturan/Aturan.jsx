/** @format */

import React from "react";
import "./style.css";

const Aturan = () => {
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-2xl text-center font-bold">
          Aturan Dalam Penyewaan GSG
        </h3>
      </div>
      <div>
        <div>
          <ol className="my-ol mx-5">
            <li>
              Harga sewa perhari adalah Rp. 12.000.000,- (duabelas juta rupiah)
            </li>
            <li>
              No. Rekening yang dapat digunakan untuk pembayaran sewa: <br />
              <ul className="my-ul">
                <li>
                  <b>Bank Mandiri</b> <br />
                  No. Rekening: <b>1540016698601</b> <br />
                  Atas Nama: <b>Amelia</b>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Aturan;
