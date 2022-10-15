import { Filesystem, Encoding } from "@capacitor/filesystem";
import { r } from "./debugger";

export const checkPermissions = function () {
  return Filesystem.checkPermissions().then((result) =>
    r(["readFile", result], result.publicStorage)
  );
};
export const requestPermissions = function () {
  return Filesystem.requestPermissions().then((result) =>
    r(["readFile", result], result.publicStorage)
  );
};
export const readdir = function () {
  return Filesystem.readdir().then((result) =>
    r(["readFile", result], result.files)
  );
};
export const mkdir = function(path){
  return Filesystem.mkdir({
    path: `${path}/`,
    encoding: Encoding.UTF8,
  })
}
export const readFile = function (path, filename, ext) {
  return Filesystem.readFile({
    path: `${path}/${filename}.${ext}`,
    encoding: Encoding.UTF8,
  }).then((result) => r(["readFile", result], result.data));
};
export const writeFile = function (path, filename, ext, data) {
  return Filesystem.writeFile({
    path: `${path}/${filename}.${ext}`,
    data: data,
    encoding: Encoding.UTF8,
  }).then((result) => r(["writeFile", result], result.uri));
};
export const deleteFile = function (path, filename, ext) {
  return Filesystem.deleteFile({
    path: `${path}/${filename}.${ext}`,
  });
};
