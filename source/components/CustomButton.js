import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = (props) => {
  const onPress = () => props.buttonAction();

  return (
    <View style={[styles.container, props.buttonContainer, {backgroundColor: props.selected === props.title ? '#32CD32' : 'transparent'}]}>      
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",    
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: 80,    
  },
  button: {
    flex: 1,    
    justifyContent: "center",    
    alignItems: "center",    
  },
});

export default CustomButton;
