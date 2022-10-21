import { Preferences } from "@capacitor/preferences";

export const setValue = function (key, value) {
  Preferences.set({
    key: key,
    value: value,
  });
};
export const getValue = function (key) {
  return Preferences.get({ key: key });
};
