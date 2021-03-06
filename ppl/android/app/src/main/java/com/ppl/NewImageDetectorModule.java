package com.ppl;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nonnull;

public class NewImageDetectorModule extends ReactContextBaseJavaModule implements LifecycleEventListener {
    private static final String TAG = "NewImageDetectorModule";
    private Context context;

    public NewImageDetectorModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;

    }

    @Nonnull
    @Override
    public String getName() {
        return TAG;
    }

    @Override
    public void onHostResume() {

    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {
    }

//    public static void fireEvent(int val){
//        WritableMap writableMap = Arguments.createMap();
//        writableMap.putInt("event",val);
//        mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                .emit("newImageAvailable",writableMap);
//    }


    @ReactMethod
    public void startNewImageDetector(Callback callback){
        context.startService(new Intent(context,ImageDetectingForegroundService.class));
        //registerReciever(callback);
    }
}
