package com.qingting.fk;

import android.app.Application;

import io.dcloud.uniplugin.DebugLogUtil;

public class MyApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        DebugLogUtil.getInstance().Debug("app - application  ");
    }
}
