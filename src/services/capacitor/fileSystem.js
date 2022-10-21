import { Capacitor } from "@capacitor/core";
import { r } from "../debugger";

import { Directory, Filesystem as MainFilesystem } from "@capacitor/filesystem";
import { Filesystem as ElectronFilesystem } from "@capacitor-community/filesystem";

let Filesystem = MainFilesystem;
if (Capacitor.getPlatform() === "android") {
  Filesystem = ElectronFilesystem;
}

export const checkPermissions = function () {
  return Filesystem.checkPermissions().then((result) =>
    r(["checkPermissions", result], result.publicStorage)
  );
};
export const requestPermissions = function () {
  return Filesystem.requestPermissions().then((result) =>
    r(["requestPermissions", result], result.publicStorage)
  );
};
export const readdir = function (path) {
  return Filesystem.readdir({
    path: `${path}/`,
    directory: Directory.External,
  }).then((result) => r(["readFile", result], result.files));
};
export const mkdir = function (path) {
  return Filesystem.mkdir({
    path: `${path}/`,
    directory: Directory.External,
  });
};
export const readFile = function (path, filename, ext) {
  return Filesystem.readFile({
    path: `${path}/${filename}.${ext}`,
    directory: Directory.External,
  }).then((result) => r(["readFile", result], result.data));
};
export const writeFile = function (path, filename, ext, data) {
  return Filesystem.writeFile({
    path: `${path}/${filename}.${ext}`,
    data: data,
    directory: Directory.External,
    recursive: true,
  }).then((result) => r(["writeFile", result], result.uri));
};
export const deleteFile = function (path, filename) {
  return Filesystem.deleteFile({
    path: `${path}/${filename}`,
    directory: Directory.External,
  });
};
