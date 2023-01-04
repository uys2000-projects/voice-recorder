/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
      setInterval(() => console.log("ready"), 1000);
    },
    registered() {
      console.log("Service worker has been registered.");
      setInterval(() => console.log("registered"), 1000);
    },
    cached() {
      console.log("Content has been cached for offline use.");
      setInterval(() => console.log("cached"), 1000);
    },
    updatefound() {
      console.log("New content is downloading.");
      setInterval(() => console.log("updatefound"), 1000);
    },
    updated() {
      console.log("New content is available; please refresh.");
      setInterval(() => console.log("updated"), 1000);
    },
    active() {
      self.clients
        .matchAll({
          type: "window",
        })
        .then((windowClients) => {
          windowClients.forEach((windowClient) => {
            windowClient.navigate(windowClient.url);
          });
        });
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
      setInterval(() => console.log("offline"), 1000);
    },
    error(error) {
      console.error("Error during service worker registration:", error);
      setInterval(() => console.log("error"), 1000);
    },
  });
}
