# LinearGradient with pointerEvents="box-none" swallows taps on Android

Reproduction for https://github.com/expo/expo/issues/53387 on Android.

Versions: Expo SDK 58 (`expo` 58.0.24), `expo-linear-gradient` 58.0.4, `react-native` 0.88.1, New Architecture.
Recorded on the Android emulator Medium_Phone_API_37.0, Android 17 (API 37), 11/12/26.

## Run

```sh
npm install
npx expo run:android   # development build, Android emulator or device
```

## What the screen shows

A scrollable list of 30 pressable rows and a footer pinned to the bottom. The footer is a
`LinearGradient` from transparent to white with `pointerEvents="box-none"`, 160 px of fade above a
"Footer button". The status line at the top shows the last thing that was tapped.
