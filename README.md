# RNChat

## Prerequisites
1. Node: run `brew install node`
2. Watchman: run `brew install watchman`
3. Cocoapods: run `sudo gem install cocoapods`
4. Java Development Kit: run `brew cask install adoptopenjdk/openjdk/adoptopenjdk8`

## Build instructions
1. Open the ```app``` directory
2. JS dependencies: run `yarn`. This should download dependencies.
5. Run `cd ios && pod install && cd ..`
6. Run `react-native run-ios` or `react-native run-android`

## Features

* send messages and display them in a list sort by date.
* Text input have some commands:
1. Clear all messages: `cmd:clr`
2. Send random message: 'cmd:lip`
* Ramdom messages are in error, state is displayed and possibility to try again.
* vibration on sending and when state of message is updated
* Message are saved and restored when application is relaunched.

## Tests

Run `yarn test`. 
Gloabl coverage is displayed in shell and a folder `covergage`is created/updated with a html template to render a website page.


## Todo

* Add tests for all files in template
* continue the custom scrollbar
* creating new commands for textinput
