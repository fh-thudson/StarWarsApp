import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const PeopleSearchScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text>People Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default PeopleSearchScreen;