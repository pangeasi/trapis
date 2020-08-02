import { getRCM } from "./../../utils/helpers";

export const getRoutesConfig = async () => {
  return getRCM("routes");
};
