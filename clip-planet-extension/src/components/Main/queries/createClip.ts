import axios from "axios";
import { baseURL } from "../../../constants/default";
import CurrentTab from "../../../types/tab";

interface CreateClipProps {
  API_KEY: string;
  ogUrl: string;
  ogTitle: string;
  favicon: string;
}

const createClip = (data: CreateClipProps) =>
  async function () {
    const result = await axios.post<CurrentTab>(
      `${baseURL}/set/extension/clip`,
      data
    );
    return result.data;
  };

export default createClip;
