/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";

import baseUrl from "../base-url";
import axios from "axios";

const useGallery = create(
  devtools((set) => ({
    galleries: [],
    getGalleries: async () => {
      const response = await axios.get(`${baseUrl()}/gallery`);
      set({ galleries: response.data });
    },
  }))
);

export default useGallery;
