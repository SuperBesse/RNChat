import React, { useRef, useState } from 'react';
import { View, Animated } from 'react-native';

type Props = {
  width: number;
  scrollbarBackgroundColor: string;
  scrollIndicatorColor: string;
};

const ScrollbarIndicator = ({
  width,
  scrollbarBackgroundColor,
  scrollIndicatorColor,
}: Props) => {
  const [touch, setTouch] = useState<number>(0);
  const [touchRelease, setTouchRelease] = useState<number>(0);

  return (
    <View style={{ backgroundColor: scrollbarBackgroundColor, width: width }}>
      <View
        style={{
          backgroundColor: scrollIndicatorColor,
          height: 30,
          top: touch,
        }}
        onStartShouldSetResponder={() => true}
        onResponderMove={event => {
          console.log('onResponderMove ', event.nativeEvent.locationY);
          setTouch(event.nativeEvent.locationY);
        }}
        onResponderRelease={event => {
          console.log('onResponderRelease ', event.nativeEvent.locationY);
          setTouchRelease(touch);
        }}
      />
    </View>
  );
};

export default ScrollbarIndicator;
