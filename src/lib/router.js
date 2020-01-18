import React from 'react';  
import { createAppContainer} from 'react-navigation';  
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Mentions from "../notifscreens/Mentions";  
import Events from "../notifscreens/Events";  

 
 
 const NotifTabs = createMaterialTopTabNavigator(  
    {  
          
        Mentions: Mentions,  
        Events: Events,
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'dodgerblue',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'dodgerblue',
        },
        },  
    }  
)  
export default createAppContainer(NotifTabs);