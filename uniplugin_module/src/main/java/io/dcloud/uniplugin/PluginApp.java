package io.dcloud.uniplugin;

import android.app.Application;

import io.dcloud.feature.uniapp.UniAppHookProxy;

public class PluginApp extends Application implements UniAppHookProxy {
    @Override
    public void onCreate() {
        super.onCreate();
        DebugLogUtil.getInstance().Debug("PluginApp - onCreate  ");
    }

    @Override
    public void onCreate(Application application) {
        DebugLogUtil.getInstance().Debug("UniApp - onCreate  ");
    }

    @Override
    public void onSubProcessCreate(Application application) {
        DebugLogUtil.getInstance().Debug("PluginApp - onSubProcessCreate  ");
    }
}
