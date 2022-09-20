package io.dcloud.uniplugin;

import android.app.Application;

import io.dcloud.feature.uniapp.UniAppHookProxy;

/**
 * 推测需要 补充后缀 _AppProxy
 */

public class PluginApp_AppProxy implements UniAppHookProxy {

    @Override
    public void onCreate(Application application) {
        DebugLogUtil.getInstance().Debug("UniApp - onCreate  ");
    }

    @Override
    public void onSubProcessCreate(Application application) {
        DebugLogUtil.getInstance().Debug("PluginApp - onSubProcessCreate  ");
    }
}
