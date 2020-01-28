import axios from "axios";
import { IBike } from "../shared-interfaces";
import { IReqParams } from "../shared-interfaces";

const URL = `${process.env.REACT_APP_BIKE_API_URL}`;

const api = axios.create({
  baseURL: URL,
  timeout: 5000
});

export const bikeApi = {
  getAllBikes: async ({
    polySize,
    centerX,
    centerY
  }: IReqParams): Promise<IBike[]> => {
    const res = await api.get(
      `/api/bikes?centerX=${centerX}&centerY=${centerY}&polySize=${polySize}`
    );
    return res.data;
  }
};
