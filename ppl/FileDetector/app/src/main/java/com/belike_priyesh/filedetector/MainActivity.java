package com.belike_priyesh.filedetector;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.Environment;
import android.os.FileObserver;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //FileObserverService fileObserverService = new FileObserverService(Environment.getExternalStorageDirectory().getPath());
        ImageReceiver imageReceiver = new ImageReceiver();
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("com.android.camera.NEW_PICTURE");
        intentFilter.addAction("android.hardware.action.NEW_PICTURE");
        FileObserverService fileObserver = new FileObserverService(Environment.getDataDirectory().getPath());
        fileObserver.startWatching();
        try {
            intentFilter.addDataType("image/*");
        } catch (IntentFilter.MalformedMimeTypeException e) {
            e.printStackTrace();
        }
        /*
        *     <action android:name="com.android.camera.NEW_PICTURE" />
            <action android:name="android.hardware.action.NEW_PICTURE" />
            <category android:name="android.intent.category.DEFAULT" />
            <data android:mimeType="image/*" />
        * */
       // registerReceiver(imageReceiver,intentFilter);
    }
}
