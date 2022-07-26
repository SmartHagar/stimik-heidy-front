/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";

import baseUrl from "../base-url";
import axios from "axios";

const useGallery = create(
  devtools((set) => ({
    galleries: [],
    getGalleries: () => {
      // const response = await axios.get(`${baseUrl()}/gallery`);
      // set({ galleries: response.data });
      axios({
        method: "get",
        url: `${baseUrl()}/gallery`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        set({ galleries: response.data });
      });
    },
  }))
);

export default useGallery;
