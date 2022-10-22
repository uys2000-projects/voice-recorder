import settings from "./settings.json";

export const r = function (debugValues, returnValue) {
  if (settings.debug) {
    console.log("Debuger :", debugValues);
    if (returnValue != undefined) console.log("Debuger Returned :", returnValue);
  }
  return returnValue;
};
