package io.dcloud.uniplugin;

import android.app.Application;
import android.widget.Toast;

public class PluginApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Toast.makeText(this, "PluginApp", Toast.LENGTH_LONG).show();
        DebugLogUtil.getInstance().Debug("PluginApp ");
    }
}
