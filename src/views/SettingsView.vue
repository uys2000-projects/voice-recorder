<template>
  <div class="w-screen h-screen p-5 flex flex-col flex-nowrap">
    <div class="flex justify-between mb-5">
      <span class="text-lg">
        Settings
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" class="h-[8vw] w-[8vw]"
        @click="backButton" :class="{'fill-t0':mainStore.t==0,'fill-t1':mainStore.t==1,'fill-t2':mainStore.t==2}">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </div>
    <div class="h-full w-full flex-grow overflow-auto">
      <div class="flex">
        <setting-button>
          <a href="https://mehmetuysal.tech/">My Web Page</a>
        </setting-button>
      </div>
      <div class="flex">
        <setting-button>
          <a href="https://github.com/uys2000">My Gthub Page</a>
        </setting-button>
      </div>
      <div class="flex">
        <setting-button>
          <a href="https://github.com/uys2000-projects/voice-recorder">Project Repository</a>
        </setting-button>
      </div>
      <div class="flex">
        <setting-button>
          <a href="https://www.buymeacoffee.com/uys2000">Buy Me a Coffe</a>
        </setting-button>
      </div>
      <div class="flex" @click="changeTheme">
        <setting-button>
          Change Theme
        </setting-button>
      </div>
      <div class="flex" @click="dataSend">
        <setting-button>
          {{ mainStore.d? "Apps Data Sharing" : "Apps Data Not Sharing"}}
        </setting-button>
      </div>

    </div>
  </div>
</template>
<script>
import { useMainStore } from '@/store/main'
import { App as CapacitorApp } from "@capacitor/app";
import SettingButton from '@/components/SettingsView/SettingButton.vue';
import { logThemeChange } from '@/services/analytics';
import { setValue } from '@/services/capacitor/preferences';
export default {
  data() {
    return {
      mainStore: useMainStore(),
    };
  },
  methods: {
    backButton: function () {
      this.mainStore.direction = false;
      this.$router.go(-1);
    },
    changeTheme: function () {
      this.mainStore.t += 1
      if (this.mainStore.t >= 3) this.mainStore.t = 0
      logThemeChange(this.mainStore.d, `${this.mainStore.t}`)
      setValue("theme", this.mainStore.t)
    },
    dataSend: function () {
      this.mainStore.d = !this.mainStore.d
    }
  },
  mounted() {
    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      if (!canGoBack)
        alert("Opss There is a Problem");
      else
        this.backButton();
    });
  },
  components: { SettingButton }
}
</script>
