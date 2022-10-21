import {
  AdMob,
  BannerAdSize,
  BannerAdPosition,
  BannerAdPluginEvents,
} from "@capacitor-community/admob";

export const adMobInitialize = function () {
  return new Promise((s, r) => {
    AdMob.trackingAuthorizationStatus().then((status) => {
      if (status === "notDetermined") {
        /**
         * If you want to explain TrackingAuthorization before showing the iOS dialog,
         * you can show the modal here.
         * ex)
         * const modal = await this.modalCtrl.create({
         *   component: RequestTrackingPage,
         * });
         * await modal.present();
         * await modal.onDidDismiss();  // Wait for close modal
         **/
      }
      AdMob.initialize({
        requestTrackingAuthorization: true,
        testingDevices: ["2077ef9a63d2b398840261c8221a0c9b"],
        initializeForTesting: true,
      })
        .then(() => s())
        .catch(() => r());
    });
  });
};

export const adMobBanner = function () {
  return new Promise((s, r) => {
    AdMob.addListener(BannerAdPluginEvents.Loaded, (size) => {
      console.log("BannerAdPluginEvents.Loaded", size);
    });

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size) => {
      console.log("BannerAdPluginEvents", size);
    });

    const options = {
      adId: "ca-app-pub-6530204715466484/9012153530",
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      //isTesting: true,
      // npa: true,
    };
    console.log(options);
    AdMob.showBanner(options)
      .then((res) => r(res))
      .catch((err) => r(err));
  });
};
