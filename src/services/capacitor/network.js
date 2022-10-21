import { Network } from "@capacitor/network";
import { r } from "../debugger";

export const getCurrentNetworkStatus = function () {
  return Network.getStatus().then((result) =>
    r(["readFile", result], result.files)
  );
};
