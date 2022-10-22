import { getCurrentNetworkStatus } from "./capacitor/network";
import { r } from "./debugger";
import {
  logWebPageRedirectFire,
  logScreeViewFire,
  logRecordShareFire,
  logThemeChangeFire,
  logRecordSavedFire,
} from "./firebase/analytics";

export const logScreeView = function (d, screenName, screenClass) {
  r("logScreeView");
  return getCurrentNetworkStatus().then((result) => {
    console.log("---------------", result);
    result & d
      ? r("logScreeViewFire", logScreeViewFire(screenName, screenClass))
      : r("logScreeViewFire", false);
  });
};
export const logWebPageRedirect = function (d) {
  r("logWebPageRedirect");
  return getCurrentNetworkStatus().then((result) =>
    result & d
      ? r("logWebPageRedirectFire", logWebPageRedirectFire())
      : r("logWebPageRedirectFire", false)
  );
};
export const logRecordSaved = function (d) {
  r("logRecordSaved");
  return getCurrentNetworkStatus().then((result) =>
    result & d
      ? r("logRecordSavedFire", logRecordSavedFire())
      : r("logRecordSavedFire", false)
  );
};
export const logRecordShare = function (d) {
  r("logRecordShare");
  return getCurrentNetworkStatus().then((result) =>
    result & d
      ? r("logRecordShareFire", logRecordShareFire())
      : r("logRecordShareFire", false)
  );
};
export const logThemeChange = function (d, themeCode) {
  r("logThemeChange");
  return getCurrentNetworkStatus().then((result) =>
    result & d
      ? r("logThemeChangeFire", logThemeChangeFire(themeCode))
      : r("logThemeChangeFire", false)
  );
};
