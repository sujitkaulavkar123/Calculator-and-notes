import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Note = (props) => {
    const color = props.item.item.header === true ? '#DCDCDC' : 'transparent';
    return (
        <View key={props.item.item.title} style={[styles.cell, { backgroundColor: color }]}>
            <Text style={styles.title}>{props.item.item.title}</Text>
            <Text style={styles.status}>{props.item.item.status}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cell: {
        height:40, 
        flexDirection: 'row',         
        justifyContent: 'space-evenly', 
        alignItems:'center',
        borderBottomColor: 'gray',        
    },
    title: {
        flex: 1, 
        textAlign:'right', 
        marginRight: 20
    },
    status: {
        flex: 1, 
        textAlign:'left', 
        marginLeft: 50
    }
});

export default Note;
