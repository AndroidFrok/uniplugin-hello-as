package io.dcloud.uniplugin;

import android.app.Application;

public class MyApplication extends Application  {
    @Override
    public void onCreate() {
        super.onCreate();
         DebugLogUtil.getInstance().Debug("MyApplication onCreate");
    }
}
