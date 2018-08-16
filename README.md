React and android Integration


1.follow this step http://facebook.github.io/react-native/docs/integration-with-existing-apps
2.create one mainApplication class in android app ->main->java folder and paste this code

package com.example.jaydeepvishwakarma.myapplication;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {


        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }

        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}

3.open Myreact Activity and check either below code is matching with this code or not if not then make changes in code as per below code
package com.example.jaydeepvishwakarma.myapplication;

import android.app.Activity;
import android.os.Bundle;
import android.view.KeyEvent;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

import java.util.ArrayList;
import java.util.Arrays;

public class MyReactActivity extends ReactActivity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected Bundle getLaunchOptions() {
                Bundle initialProperties = new Bundle();
                ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(
                        "https://www.gstatic.com/webp/gallery/4.sm.webp",
                        "https://www.gstatic.com/webp/gallery/4.sm.webp"
                ));
                initialProperties.putStringArrayList("images", imageList);
                return initialProperties;
            }
        };
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setCurrentActivity(this)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        // The string here (e.g. "MyReactNativeApp") has to match
        // the string in AppRegistry.registerComponent() in index.js
        mReactRootView.startReactApplication(mReactInstanceManager, "AwesomeProject", null);

        setContentView(mReactRootView);

    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

}

4. open App -> build.gradle and do changes as per given link
5. open main build.gradle and do changes as per given 
6. for debugging add extra line of code in  myReactactivitry i.e. setCurrentActivity(this) and in android manifest add line those are mention in 1st line url


***************************Pass the data from android to react native page*************************************

1.add this line inside reactInstantManagerBuild 
Bundle initialProps = new Bundle();
initialProps.putString("SOME_VARIABLE_1", "test");
initialProps.putString("SOME_VARIABLE_2", "some variable 2 value");

2. and pass initialProps into startreactApplication like this;
mReactRootView.startReactApplication(mReactInstanceManager, "AwesomeProject", initialProps);

3. Toaccess this parameter white {this.props.SOME_VARIABLE_1} and u can access data from android page to react page.


**************************Pass Data from ReactNative Page to Native Android Page******************************
1.



