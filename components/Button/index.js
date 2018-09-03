import React, { Component } from "react";
import PropsTypes from "prop-types";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
}
Button.propsTypes = {
  iconName: PropsTypes.string.isRequired,
  onPress: PropsTypes.func.isRequired
};
export default Button;
