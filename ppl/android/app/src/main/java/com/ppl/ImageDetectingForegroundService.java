package com.ppl;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.os.IBinder;
import android.support.annotation.RequiresApi;
import android.support.v4.app.NotificationCompat;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;

import java.io.FileNotFoundException;


public class ImageDetectingForegroundService extends Service  {
    private static final int NOTIFICATION_ID = 852;
    private static final int IMAGE_NOTI = 149;
    private final String  IMAGE_NOTI_CHANNEL= "IMAGE_NOTIFICATION_CHANNEL";
    private static final String TAG = "ImageDetectingForegroun";
    public ImageDetectingForegroundService() {

    }


    @RequiresApi(api =Build.VERSION_CODES.O)
    private void startForegroundService() {
        NotificationManager notificationManager = (NotificationManager) this.getSystemService(Context.NOTIFICATION_SERVICE);
        //Intent intent = new Intent();
        //PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, 0);

        // Create notification builder.


        // Make notification show big text.
//        NotificationCompat.BigTextStyle bigTextStyle = new NotificationCompat.BigTextStyle();
//        bigTextStyle.setBigContentTitle("foreground service.");
//        bigTextStyle.bigText("Android foreground service is a android service which can run in foreground always, it can be controlled by user via notification.");
//        // Set big text style.
//        builder.setStyle(bigTextStyle);


        NotificationChannel notificationChannel =
                new NotificationChannel("NOTIFICATION","Service",NotificationManager.IMPORTANCE_HIGH);
        notificationChannel.enableLights(true);
        notificationChannel.enableVibration(true);
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this,"NOTIFICATION");
        builder.setPriority(Notification.PRIORITY_MAX);
        // Make head-up notification.
//        builder.setFullScreenIntent(pendingIntent, true);
        builder.setWhen(System.currentTimeMillis());
        builder.setContentTitle("Service");
        builder.setContentText("Service is on");
        builder.setTicker("Service is running");
        builder.setSmallIcon(android.R.drawable.btn_plus);
        notificationManager.createNotificationChannel(notificationChannel);
        Notification notification = builder.build();


        this.startForeground(NOTIFICATION_ID,notification);
    }



    @Override
    public void onCreate() {
        super.onCreate();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            startForegroundService();
            registerReciever();
        }

    }
    @RequiresApi(api = Build.VERSION_CODES.O)
    private void createImageNotification(Uri uri) throws FileNotFoundException {
        NotificationManager notificationManager = (NotificationManager) this.getSystemService(Context.NOTIFICATION_SERVICE);

        Notification.Builder notification = new Notification.Builder(this,"NOTIFICATION");
        notification.setContentText("Image");
        notification.setContentTitle("Image");
        Notification.BigPictureStyle bigPictureStyle = new Notification.BigPictureStyle();
        bigPictureStyle.setBigContentTitle("IMAGE");

        Bitmap bitmap = BitmapFactory.decodeStream(this.getContentResolver().openInputStream(uri));
        bigPictureStyle.bigPicture(bitmap);
        notification.setStyle(bigPictureStyle);
        notification.setSmallIcon(android.R.drawable.btn_plus);
        notificationManager.notify(IMAGE_NOTI,notification.build());




    }
    private void registerReciever(){
        BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                Uri uri = intent.getData();

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    try {
                        createImageNotification(uri);
                    } catch (FileNotFoundException e) {
                        e.printStackTrace();
                    }
                }
                Toast.makeText(context, "New Image Found", Toast.LENGTH_SHORT).show();
                //callback.invoke(1);
            }
        };

        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("com.android.camera.NEW_PICTURE");
        intentFilter.addAction("android.intent.action.MEDIA_SCANNER_SCAN_FILE");
        intentFilter.addAction("android.hardware.action.NEW_PICTURE");
        try {
            intentFilter.addDataType("image/*");
        } catch (IntentFilter.MalformedMimeTypeException e) {
            e.printStackTrace();
        }

        this.registerReceiver(broadcastReceiver,intentFilter);
    }

    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
        throw new UnsupportedOperationException("Not yet implemented");
    }
}
