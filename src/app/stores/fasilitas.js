/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";

import baseUrl from "../base-url";
import axios from "axios";

const useFacility = create(
  devtools((set) => ({
    facilities: [],
    getFacilities: async () => {
      const response = await axios.get(`${baseUrl()}/facility`);
      set({ facilities: response.data });
    },
  }))
);

export default useFacility;
