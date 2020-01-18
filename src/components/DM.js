import React , {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
           
            
        
         };
    }

      

    render(){
        
        return(          
 
            <View style = {{flex:1, width: 100 + "%", backgroundColor:'black'}}> 
                    
                <View style = {styles.DMContainer}> 
                       
                   
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Convo')}
                         >  
                        <Image style = {styles.senderPic} 
                        source = {{uri: "https://www.thefamouspeople.com/profiles/images/jhen-aiko-5.jpg"}}/>
                        </TouchableOpacity>

                        
                        <View style = {styles.senderBar}> 

                        <TouchableOpacity>
                        <Text style = {styles.senderName}>j_nayynayy  </Text>
                        </TouchableOpacity>

                         <Text style = {styles.activity}> · 45 minutes ago </Text>
                        </View>

                       
                        

                        <View style = {styles.DMDescription}>
                        <TouchableOpacity>
                        <Text style = {{marginLeft: 10, fontWeight: '200', color: "white", fontSize: 15,  position: "absolute", top: 0}}>
                       Lets hangout!
                        </Text>
                        </TouchableOpacity>
                        </View>

                  
                                           
                </View>


                

                

            
               
                    
              
                

                    




                

                </View>
           
        );
    }
}

const styles = StyleSheet.create({
   

    activity: {
        color: "gray",
        fontSize: 13
    },

    commentBar: {
        width: 100 + "%",
        
        borderColor: 'rgb(233,233,233)',
        
        
    },

    commentIcon: {
       marginLeft: 50,
       color: "gray"
    },


    dislikeIcon:{
        marginLeft: 50,
        color:"gray"
    },


    eventName: {
        marginLeft: 10,
        color: 'white',
        fontSize: 18,
        fontWeight:'300'
    },

    DMDescription: {
        height: 50,
        width: 280,
        position: "absolute",
        top: 30,
        right: 12,
        
    },
    

    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },


    iconBar: {
        height: 40,
        width: 100 + "%",
        flexDirection: 'row',
        alignItems: 'flex-start',
        
        
    },

    likeIcon:{
        marginLeft: 15,
        color: "gray"
    },

     senderBar: {
        height: 30,
        width: 280,
        flexDirection: 'row',
        alignItems: 'flex-start',
        top:10,
        
        
    },


    senderHandle: {
       
        color: 'cyan',
        fontSize: 16,
        
               
    },

    
    senderName: {
        marginLeft: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        
    },

    
    senderPic: {
        height: 60,
        width: 60,
        borderRadius: 35,
        borderColor: 'white',
        borderWidth: 1,
        top: 10
        
        
       
    },


    rating: {
        position: "absolute",
        right: 40,
        color: "gray",
        fontSize: 14

    },
    
    ratingIcon: {
        position: "absolute",
        right: 10,
        height: 30,
        width: 30,
    },
   
     tempNav: {
        width: 100 + "%",
        height: 56,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101011',
       
    },

   
    DMContainer: {
        width: 100 + "%",
        height: 80,
        backgroundColor: 'black',
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
       
        
    },

  
});


export default Post;

