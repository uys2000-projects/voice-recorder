package com.siliente.voiceRecorder;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;

public class MainActivity extends BridgeActivity, Service {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(com.getcapacitor.community.admob.AdMob.class);
  }
}
