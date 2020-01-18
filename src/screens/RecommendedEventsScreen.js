import React, {Component} from 'react';  
import {View,Text, StyleSheet, Fragment} from 'react-native';  
import { Header, SearchBar } from 'react-native-elements'; 
import Icon from 'react-native-vector-icons/FontAwesome5';
import  { RecommendedEventsFeed }  from './index';
  
class RecommendedEventsScreen extends Component{  
    static navigationOptions = {
  // Hide the header from AppNavigator stack
  title: 'Title',
};
      
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
  const { navigate } = this.props.navigation;
    
        return(  
           
             
            <View style = {{width:100 + "%", height: 100 + "%", backgroundColor:'black'}}>
                   
                <View style = {styles.top}> 
                
                <View style = {styles.searchBar}>
               <SearchBar 
                placeholder="Search campus..."
                round
                fontColor="white"
                
                containerStyle={{backgroundColor: 'black', borderWidth: 1, borderRadius: 10}}
                
                onChangeText={this.updateSearch}
                value={search} /> 
                </View>
                </View>   

                   
                  <View style = {styles.tabBar}> 
                    <RecommendedEventsFeed/>
                  </View>
            </View>  
           
        );  
    }  
}  
RecommendedEventsScreen.navigationOptions={  
tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={'calendar-check'}  
                color={tintColor}  
                size={25}  
            />  

            ),
};

    
     




      
 

  



export default RecommendedEventsScreen;
const styles = StyleSheet.create({  
    
    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },
    
   
    searchBar: {
      
     borderRadius: 20,
     alignContent: 'center',
     width: 350,
     top: 20,
     height: 15,
    
        
    },

    tabBar: {
      top: 40,
      height: 100 + '%'  
    },
    
    
    top:
    {
     width: 300,
     height: 30,
     flexDirection: 'row',
     justifyContent: 'center',
     left: 32,
    
    }

     
});  

