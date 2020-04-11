import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'


const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name="search" size={30}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="search"
                style={styles.inputStyle}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={oldterm=> onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#ccc',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    iconStyle:{
        marginHorizontal: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },

})
export default SearchBar
