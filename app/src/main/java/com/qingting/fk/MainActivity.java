package com.qingting.fk;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import com.android.UniPlugin.R;

import io.dcloud.uniplugin.NativePageActivity;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        startActivity(new Intent(this, NativePageActivity.class));
    }
}