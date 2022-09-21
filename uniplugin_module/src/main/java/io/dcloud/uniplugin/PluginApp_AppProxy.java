package io.dcloud.uniplugin;

import android.app.Application;
import android.widget.Toast;

import io.dcloud.feature.uniapp.UniAppHookProxy;

/**
 * 推测需要 补充后缀 _AppProxy
 */

public class PluginApp_AppProxy implements UniAppHookProxy {

    @Override
    public void onCreate(Application application) {
//        Toast.makeText(application, "uniPlugin _AppProxy", Toast.LENGTH_LONG).show();
        DebugLogUtil.getInstance().Debug("uniPlugin _AppProxy - onCreate  ");
    }

    @Override
    public void onSubProcessCreate(Application application) {
//        Toast.makeText(application, "PluginApp_AppProxy  onSubProcessCreate", Toast.LENGTH_LONG).show();
        DebugLogUtil.getInstance().Debug("PluginApp - onSubProcessCreate  ");
    }
}
