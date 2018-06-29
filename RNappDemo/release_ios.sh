#!/bin/sh
cd ~/RNappDemo/
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output release_ios/main.jsbundle --assets-dest release_ios/
