/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";

import baseUrl from "../base-url";
import axios from "axios";

const useSchedule = create(
  devtools((set) => ({
    schedule: [],
    getSchedule: async () => {
      const response = await axios.get(`${baseUrl()}/schedule`);
      set({ schedule: response.data });
    },
  }))
);

export default useSchedule;
