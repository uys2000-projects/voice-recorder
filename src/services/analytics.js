import { getCurrentNetworkStatus } from "./capacitor/network";
import { r } from "./debugger";
import {
  logWebPageRedirectFire,
  logScreeViewFire,
  logRecordShareFire,
  logThemeChangeFire,
  logRecordSavedFire,
} from "./firebase/analytics";

export const logScreeView = function (screenName, screenClass) {
  r("logScreeView");
  return getCurrentNetworkStatus().then((result) => {
    console.log("---------------", result);
    result
      ? r("logScreeViewFire", logScreeViewFire(screenName, screenClass))
      : r("logScreeViewFire", false);
  });
};
export const logWebPageRedirect = function () {
  r("logWebPageRedirect");
  return getCurrentNetworkStatus().then((result) =>
    result.connected
      ? r("logWebPageRedirectFire", logWebPageRedirectFire())
      : r("logWebPageRedirectFire", false)
  );
};
export const logRecordSaved = function () {
  r("logRecordSaved");
  return getCurrentNetworkStatus().then((result) =>
    result.connected
      ? r("logRecordSavedFire", logRecordSavedFire())
      : r("logRecordSavedFire", false)
  );
};
export const logRecordShare = function () {
  r("logRecordShare");
  return getCurrentNetworkStatus().then((result) =>
    result.connected
      ? r("logRecordShareFire", logRecordShareFire())
      : r("logRecordShareFire", false)
  );
};
export const logThemeChange = function (themeCode) {
  r("logThemeChange");
  return getCurrentNetworkStatus().then((result) =>
    result.connected
      ? r("logThemeChangeFire", logThemeChangeFire(themeCode))
      : r("logThemeChangeFire", false)
  );
};
