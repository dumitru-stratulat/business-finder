import React,{ useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults'
import ResultList  from '../components/ResultsList'


const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = (price) =>{

        return results.filter(result =>{
            return result.price === price
        })
    }
    return (
        <View style={styles.container}>
            <Text>SearchScreen</Text>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={()=>searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {JSON.stringify(results.length)} results</Text>
            <ScrollView>
                <ResultList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultList results={filterResultsByPrice('$$')} title="Bit pricer"/>
                <ResultList results={filterResultsByPrice('$$$')} title="Big spender"/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default SearchScreen
