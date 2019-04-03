package com.belike_priyesh.filedetector;

import android.os.FileObserver;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.Log;

import java.io.File;

public class FileObserverService extends FileObserver {
    private static final String TAG = "FileObserverService";
    public FileObserverService(String path) {
        super(path);
    }

    @Override
    public void onEvent(int event, @NonNull String path) {
        if(path!=null &&path.equals(".probe")){
            Log.d(TAG, "onEvent: New Probe File Added");
            return;
        }
        if(event == FileObserver.CREATE)
            Log.d(TAG, "onEvent: New File Added");

    }


}
