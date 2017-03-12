# TUTORIAL STEP BY STEP: SETUP REACT-NATIVE FOR ANDROID (IN WINDOWS)
## Step 1
	- Install Nodejs: `https://nodejs.org/en/`
	- Install Python2: `https://www.python.org/downloads/`
		+ My Computer -> Properties -> Advanced system settings -> Environment Variables... -> at System variables find var patch, so add directory to python installed. Nomal directory installed  `C:\Python27` -> OK -> OK.
	* Check version
		- nodejs: `node --version`
		- npm: `npm --version`
		- python: `python --version`

## Step 2
	- Install the React Native CLI `npm install -g react-native-cli`

## Step 3
	- Install jdk: `http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html`
		+ Nomal install
		+ My Computer -> Properties -> Advanced system settings -> Environment Variables... -> Add new:
		`JAVA_HOME = C:\Program Files\Java\jdk1.8.0_121`

## Setep 4
	- Download Android Studio: `https://developer.android.com/studio/index.html`
	- Nomal install: Install the AVD and HAXM
		`Android SDK
		 Android SDK Platform
		 Performance (Intel ® HAXM)
		 Android Virtual Device`
	-  Install the Android 6.0 (Marshmallow) SDK: 
		+ SDK Manager check
		`Google APIs
		 Android SDK Platform 23
		 Intel x86 Atom_64 System Image
		 Google APIs Intel x86 Atom_64 System Image`
	- OK! (download and install)

## Step 5
	- Set up the ANDROID_HOME environment variable
		+ My Computer -> Properties -> Advanced system settings -> Environment Variables... -> Add new:
		`ANDROID_HOME = C:\Users\{UserName}\AppData\Local\Android\Sdk`
		+ My Computer -> Properties -> Advanced system settings -> Environment Variables... -> find PATCH (if without PATCH that add new PATCH in varlibles for user)
		`PATCH = %PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools`

## Step 6
	- Run AVDs: open cmd run command `android avd`
	(open SDK Manager that run command: `android`)
	* if errors same that: 
			`The "android" command is no longer available.
			For manual SDK and AVD management, please use Android Studio.
			For command-line tools, use
			tools\bin\sdkmanager.bat and tools\bin\avdmanager.bat`
		- Download tools: `https://www.youtube.com/watch?v=FMLVY3PqPlc` do follow like in video
	- Create a device android and run

## Step 7
	- Create Project React-Native `react-native init {Name Your Project}`
	- cd {Name Your Project}
	- run command: `react-native start`
	- open new cmd and cd {your project}: `react-native run-android`
 GOODLUCK!!!

### link detail `https://facebook.github.io/react-native/docs/getting-started.html`