import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title,results,navigation}) => {
    console.log(results.length)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                    return (  
                        <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id: item.id})}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    ) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
})

export default withNavigation(ResultsList)
