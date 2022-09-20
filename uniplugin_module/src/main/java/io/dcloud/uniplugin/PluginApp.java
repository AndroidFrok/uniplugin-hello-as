package io.dcloud.uniplugin;

import android.app.Application;

public class PluginApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        DebugLogUtil.getInstance().Debug("PluginApp ");
    }
}
