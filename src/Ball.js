import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

const Ball = () => {
  const position = useRef(new Animated.ValueXY(0, 0)).current;

  useEffect(() => {
    moveBall();
  });

  const moveBall = () => {
    Animated.spring(position, {
      toValue: { x: 100, y: 200 },
      tension: 0.001,
    }).start(() => {
      // position.setValue({ x: 0, y: 0 });
    });
  };

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.container} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "palegreen",
  },
});

export default Ball;
