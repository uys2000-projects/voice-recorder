import settings from "./settings.json";

export const r = function (debugValues, returnValue) {
  if (settings.debug) {
    console.log("Debug Returner :", debugValues);
    if (returnValue != undefined) console.log("Debug Returned :", returnValue);
  }
  return returnValue;
};
