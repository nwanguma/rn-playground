import React, { useState } from "react";
import { View, PanResponder, Animated } from "react-native";

const Deck = ({ data, renderCard }) => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {},
  });

  const [panResponderState, setPanResponderState] = useState(panResponder);

  const renderCards = () => {
    return data.map((item) => {
      return renderCard(item);
    });
  };
  return (
    <Animated.View position={position.getLayout()}>
      <View {...panResponderState.panHandlers}>{renderCards()}</View>
    </Animated.View>
  );
};

export default Deck;
