import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import DeviceInfo from 'react-native-device-info';

const isSimulator = () => DeviceInfo.isEmulator();

export const launchSuccessFeedback = () => {
  if (!isSimulator) {
    ReactNativeHapticFeedback.trigger('notificationSuccess');
  }
};

export const launchFailureFeedback = () => {
  if (!isSimulator) {
    ReactNativeHapticFeedback.trigger('notificationError');
  }
};
