import React, {Component} from 'react';  
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { SearchBar, Header } from 'react-native-elements';
import DMFeed from '../components/DMFeed';

export default class MessagePage extends Component{ 
    static navigationOptions = {
header: null,
};


  
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    
    const { search } = this.state;
  

        return(  

          <View style = {{width:100 + "%", height: 100 + "%", backgroundColor:'black'}}>

               <Header
    containerStyle={{
    backgroundColor: 'dimgray',
     }}
    leftComponent={
    <TouchableOpacity
      onPress={() => {this.props.navigation.navigate('MainFeed')}}>
      <Icon name="ios-arrow-back" type="Ionicons" size={30} color="black" />
    </TouchableOpacity>}

   centerComponent={{ text: 'king_dayydayy', style: { color: 'white', fontWeight: '600', fontSize: 16 } }}
  rightComponent={{ icon: 'textsms', color: 'white' }}
 
/>
                
                <View style = {styles.searchBar}>
               <SearchBar 
                placeholder="Search conversations..."
                round
               
                containerStyle={{backgroundColor: 'black', borderWidth: 1, borderRadius: 10}}
                
                onChangeText={this.updateSearch}
                value={search} /> 
                </View>
             
                <DMFeed/>
                   
                  
            </View>  

        )  
    }  
}  
const styles = StyleSheet.create({  
    
    header: {
      
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },
    
   
    searchBar: {
      
     borderRadius: 20,
     alignContent: 'center',
     width: 360,
     
    
        
    },

    tabBar: {
      top: 40,
      height: 100 + '%'  
    },
    
    
    top:
    {
     
     width: 300,
     height: 90,
     flexDirection: 'row',
     justifyContent: 'center',
     backgroundColor: 'gray',
     borderWidth: 1,
     borderColor: 'white'
     
    }

     
});  
