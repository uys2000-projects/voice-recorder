import { App } from "@capacitor/app";

export const appStateChangeListener = function () {
  App.addListener("appStateChange", ({ isActive }) => {
    console.log("App state changed. Is active?", isActive);
  });
};

export const appUrlOpenListener = function () {
  App.addListener("appUrlOpen", (data) => {
    console.log("App opened with URL:", data);
  });
};

export const appRestoredResultListener = function () {
  App.addListener("appRestoredResult", (data) => {
    console.log("Restored state:", data);
  });
};
export const checkAppLaunchUrl = function () {
  return App.getLaunchUrl().then((value) => {
    console.log("App opened with URL: " + value.url);
  });
};
