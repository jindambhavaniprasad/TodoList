import React, { cloneElement } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Task = ({ text, index, deleteTask }) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.box}></View>
                <Text style={styles.text}>{text}</Text>
            </View>
            <TouchableOpacity onPress={()=>deleteTask(index)} style={styles.itemRight}></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemRight: {
        height: 12,
        width: 12,
        borderRadius: 6,
        borderColor: '#55bcf6',
        borderWidth: 2
    },
    box: {
        width: 20,
        height: 20,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        marginRight: 10,
        borderRadius: 5
    },
    text: {
        maxWidth: '80%'
    }
})
export default Task;