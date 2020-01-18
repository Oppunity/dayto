import React, {Component} from 'react';  
import { Icon } from 'react-native-vector-icons/SimpleLineIcons';
import {View,Text} from 'react-native'; 
import { CommentFeed } from './index';

class CommentScreen extends Component{  
    render() {  
        return(  
            <View>  
                <CommentFeed/>
            </View>  
        )  
    }  
}  
CommentScreen.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>{
        <Icon name={'speech'} color={tintColor} size={25} />
    }  
}  

export default CommentScreen;