import React, { Component} from 'react';
import  Rating  from './Rating.js';
import { FlatList, View } from "react-native";



class RatingFeed extends Component{

name = ["overall rating", "atractiveness of girls", "chances of blacking out", "food", "music", "free stuff", "how acceptable is it to be black out"]

    _renderPost({ item }) {
       return <Rating item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        return (<View style = {{bottom: 20 }}> 
        <FlatList
            data = {this.name}
            keyExtractor={this._returnKey}
            renderItem={this._renderPost}
             />
        </View> 
        );        
    }
}

export default RatingFeed;