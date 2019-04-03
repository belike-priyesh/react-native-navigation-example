package com.belike_priyesh.filedetector;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class ImageReceiver extends BroadcastReceiver {
    private static final String TAG = "ImageReceiver";
    @Override
    public void onReceive(Context context, Intent intent) {

        Log.d(TAG, "onReceive: Inmage ");
    }
}
