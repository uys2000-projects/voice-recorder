import {
  getAnalytics,
  logEvent,
} from "firebase/analytics";
import app from "./app";

const analytics = getAnalytics(app);


export const logScreeViewFire = function (screenName, screenClass) {
  return logEvent(analytics, "screen_view", {
    firebase_screen: screenName,
    firebase_screen_class: screenClass,
  });
};

export const logWebPageRedirectFire = function () {
  return logEvent(analytics, "web_page_redirect", {});
};

export const logRecordSavedFire = function () {
  return logEvent(analytics, "record_saved", {});
};
export const logRecordShareFire = function () {
  return logEvent(analytics, "record_share", {});
};

export const logThemeChangeFire = function (themeCode) {
  return logEvent(analytics, "theme_change", {
    theme_code: themeCode,
  });
};
