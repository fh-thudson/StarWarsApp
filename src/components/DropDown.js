import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Context as AppContext } from "../context/AppContext";

const DropDown = () => {

    const { state, updateApiError, updateLoading, updateSelectedManufacturer, filterByManufacturer } = useContext(AppContext);
    // console.log(state);

    // FontAwesome.loadFont(); // not sure this is needed here because on parent stack
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [data, setData] = useState([]);

    if(state.shipManufacturer.length === 0){
        return null;
    }

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'red' }]}>Select Ship Manufacturer</Text>
            );
        }
        return null;
    };

    const createLabelData = () => {
        let labelData = [];
        for (let index = 0; index < state.shipManufacturer.length; index++) {
            labelData.push({ label: state.shipManufacturer[index], value: state.shipManufacturer[index] });
        }
        // return labelData;
        setData(labelData);
    }

    useEffect(() => {
        createLabelData();
    }, []);

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'red' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Manufacturer' : '...'}
                searchPlaceholder="Search..."
                // value={value}
                value={state.selectedManufacturer}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    // setValue(item.value);
                    updateSelectedManufacturer(item.value);
                    filterByManufacturer(item.value, state.shipData);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <FontAwesome style={styles.icon} color={isFocus ? 'red' : 'black'} name="space-shuttle" size={20} />
                )}
            />
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        padding: 16,
        width: 300,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'lightgray',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        // borderRadius: 10,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default DropDown;

