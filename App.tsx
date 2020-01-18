import React, { Component } from 'react';
import { Navigator, StyleSheet, View, TouchableOpacity } from 'react-native'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  

import CommentScreen from './src/screens/CommentScreen';
import HomeScreenPage from './src/screens/HomeScreenPage';

import IndividualInterestPage from './src/screens/IndividualInterestPage';
import InfoScreen from './src/screens/InfoScreen';
import LogInPage from './src/screens/LogInPage';
import MainFeedPage from './src/screens/MainFeedPage';
import MediaClickPage from './src/screens/MediaClickPage';
import MessagePage from './src/screens/MessagePage';

import OrgProfilePage from './src/screens/OrgProfilePage';
import OrgRecommendationPage from './src/screens/OrgRecommendationPage';
import OrganizationSignUpPage from './src/screens/OrganizationSignUpPage';
import PopnSearchPage from './src/screens/PopnSearchPage';
import SettingPage from './src/screens/SettingPage';
import SignUpPage from './src/screens/SignUpPage';
import UploadPage from './src/screens/UploadPage';
import UserProfilePage from './src/screens/UserProfilePage';

import AccountSelectPage  from './src/screens/AccountSelectPage';
import IndividualSignUpPage from './src/screens/IndividualSignUpPage';


import  RecommendedEventsScreen   from './src/screens/RecommendedEventsScreen';
import   PopularScreen from './src/screens/PopularScreen';
import  SportsScreen   from './src/screens/SportsScreen';

import  Mentions  from './src/notifscreens/Mentions';
import  Events  from './src/notifscreens/Events';

import  FollowerScreen  from './src/screens/FollowerScreen';
import  FollowingScreen  from './src/screens/FollowingScreen';

//import  {SearchHeader}  from './src/screens/index';

//import ConvoPage from './src/screens/ConvoPage';

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile)


export default class App extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
   const { navigation } = this.props;

      return (
          <AppContainer/> 
      )
  }
}


const SearchTabs = createMaterialTopTabNavigator(  
    {  
        Recommended: {
            screen: RecommendedEventsScreen,
            navigationOptions: 
            {
                title: 'For you'}
             },

        Popular: {
            screen:PopularScreen,
            navigationOptions: 
            {
                title: 'Popular'}
             },
       
        SportsScreen: {
            screen:SportsScreen,
            navigationOptions:  
             {
                title: 'Sports'}
            },
    },

    { 
        tabBarOptions: {  
            activeTintColor: 'cyan',  
            showIcon: true,  
            showLabel:true,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'cyan',
        },
        },  
    }) 


 const NotifTabs = createMaterialTopTabNavigator(  
    {  
        Events: {
            screen: Events,
            navigationOptions: 
            {
                title: 'Events'}
             },

        Mentions: {
            screen: Mentions,
            navigationOptions: 
            {
                title: 'Mentions'}
             },
       
        
    },

    { 
        tabBarOptions: {  
            activeTintColor: 'cyan',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'cyan',
          },
                         },
  });

const FollowerTab = createMaterialTopTabNavigator(  
    {  
        Followers: {
            screen: FollowerScreen,
            navigationOptions: 
            {
                title: 'Followers',
                }
             },

        Following: {
            screen: FollowingScreen,
            navigationOptions: 
            {
                title: 'Following',
                
                }
             },        
    },
    

    { 
        tabBarOptions: {  
            
            activeTintColor: 'white',  
            showIcon: true,  
            showLabel:true,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'white',
          },
           headerTintColor: 'white'
                         },
                         tabStyle: {
    height: 50,
  },
  });

    const EventClickTab = createMaterialTopTabNavigator(  
    {  
        Info: {
            screen: InfoScreen,
            navigationOptions: 
            {
                title: 'Info',
                }
             },

        Comment: {
            screen: CommentScreen,
            navigationOptions: 
            {
                title: 'Comments',
                
                }
             },        
    },
    

    { 
        tabBarOptions: {  
            
            activeTintColor: 'cyan',  
            showIcon: true,  
            showLabel:true,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'cyan',
          },
           headerTintColor: 'white'
                         },
                         tabStyle: {
    height: 50,
  },
  });



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

/*
FollowerTab.navigationOptions = {
   
      headerShown: true,
  headerStyle: { backgroundColor: 'dimgray' },
  headerTitleStyle: { color: 'white' },
  title: "king_dayydayy",
  headerLeft: <TouchableOpacity
      onPress={() => this.props,navigation.navigate('MainFeed')}
      style={{left: 20}}>
      <Icon name="ios-arrow-back" type="Ionicons" size={30} color="white" />
    </TouchableOpacity>
  }
  */



const RootStack = createStackNavigator ({ 
  //Convo: ConvoPage,
  HomeScreen: HomeScreenPage,
  EventClickTab: EventClickTab,
  Followers:{
  screen: FollowerTab,
        navigationOptions: ({navigation}) => {  //destructure the navigation property here 
            return {
                headerShown: true,

                headerStyle: { backgroundColor: 'dimgray' },

                headerTitleStyle: { color: 'white' },

                title: "king_dayydayy",

                headerLeft: () =>
                <TouchableOpacity
                onPress={() => navigation.navigate('UserProfile')}
                style={{left: 20}}>
                <Icon name="ios-arrow-back" type="Ionicons" size={30} color="white" />
                </TouchableOpacity>
            ,         
            }
        }
  },
    
  
  IndividualInterest: IndividualInterestPage,
  LogIn: LogInPage,
  MainFeed: MainFeedPage,
  MediaClick: MediaClickPage,
  Message: MessagePage,
  Notifications: {
  screen: NotifTabs,
        navigationOptions: ({navigation}) => {  //destructure the navigation property here 
            return {
                headerShown: true,

                headerStyle: { backgroundColor: 'dimgray' },

                headerTitleStyle: { color: 'white' },

                title: "king_dayydayy",

                headerLeft: () =>
                <TouchableOpacity
                onPress={() => navigation.navigate('MainFeed')}
                style={{left: 20}}>
                <Icon name="ios-arrow-back" type="Ionicons" size={30} color="white" />
                </TouchableOpacity>,
                     
            }
        }
  },


  Search: {
  screen: SearchTabs,
        navigationOptions: ({navigation}) => {  //destructure the navigation property here 
            return {
                headerShown: true,

                headerStyle: { backgroundColor: 'dimgray' },

                headerTitleStyle: { color: 'white' },

                title: "king_dayydayy",

                headerLeft: () =>
                <TouchableOpacity
                onPress={() => navigation.navigate('MainFeed')}
                style={{left: 20}}>
                <Icon name="ios-arrow-back" type="Ionicons" size={30} color="white" />
                </TouchableOpacity>,
                     
            }
        }
  },
 
  OrgProfile: OrgProfilePage,
  OrgRecommendation: OrgRecommendationPage,
  PopnSearch: PopnSearchPage,
  Setting: SettingPage,
  SignUp: SignUpPage,
  Upload: UploadPage,
  UserProfile: UserProfilePage,
 
  AccountSelect: AccountSelectPage,
  OrganizationSignUp: OrganizationSignUpPage,
  IndividualSignUp: IndividualSignUpPage
},
{
  initialRoute: 'HomeScreen',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
},

}
)


        

const AppContainer = createAppContainer(RootStack)




