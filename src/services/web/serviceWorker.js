// This code executes in its own worker or thread
self.addEventListener("install", (event) => {
  console.log(event);
  console.log("Service worker installed");
});
self.addEventListener("activate", (event) => {
  console.log(event);
  console.log("Service worker activated");
});
