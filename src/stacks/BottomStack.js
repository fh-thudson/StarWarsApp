import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PeopleSearchScreen from '../screens/PeopleSearchScreen';
import ShipSearchScreen from '../screens/ShipSearchScreen';
import PlanetSearchScreen from '../screens/PlanetSearchScreen';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomStack = () => {

    // MaterialCommunityIcons.loadFont();
    // AntDesign.loadFont();
    FontAwesome.loadFont();
    IonicIcons.loadFont();
    
    return (
        <Tab.Navigator
            initialRouteName="ShipSearchScreen"
        >
            <Tab.Screen name="PeopleSearch" component={PeopleSearchScreen} 
                options={{ 
                    headerShown: false,
                    tabBarLabel: 'People Search',
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({ color, size }) => (
                        <IonicIcons name="people" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="ShipSearchScreen" component={ShipSearchScreen} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'Ship Search',
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="space-shuttle" color={color} size={size} />
                    ),
                    // tabBarBadge: 3,
                }}
            />
            <Tab.Screen name="PlanetSearchScreen" component={PlanetSearchScreen} 
                options={{ 
                    headerShown: false,
                    tabBarLabel: 'Planet Search',
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'grey',
                    tabBarIcon: ({ color, size }) => (
                        <IonicIcons name="planet-sharp" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomStack;