import { getRCM } from "../../utils/helpers";

export const getControllers = async () => {
  return getRCM("controllers");
};
