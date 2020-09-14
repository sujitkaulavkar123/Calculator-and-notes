import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
    return (
        <View
            style={styles.container}>
            <TextInput
                value={props.value}
                placeholder={props.placeholder}
                keyboardType='numbers-and-punctuation'
                numberOfLines={1}
                style={styles.textInput}
                onChangeText={text => props.onChangeText(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 120,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
    },
    textInput: {
        width: '100%', 
        height: '100%'
    }
})

export default CustomTextInput;
