import {Tabs} from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function TabsLayout(){
    return (
    <Tabs>
        <Tabs.Screen 
        name='Home' 
        options={{
            tabBarLabel:'Home',
            tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color}
            />}} 
        />
        <Tabs.Screen 
        name='Courses' 
        options={{
            tabBarLabel:'Courses',
            tabBarIcon: ({color}) => <FontAwesome name="book" size={24} color={color} />}} />
        <Tabs.Screen 
        name='Leaderboard' 
        options={{
            tabBarLabel:'Leaderboard',
            tabBarIcon: ({color}) => <FontAwesome name="bar-chart" size={24} color={color} />
        }} />
        <Tabs.Screen 
        name='Tools' 
        options={{
            tabBarLabel:'Tools',
            tabBarIcon: ({color}) => <FontAwesome name="wrench" size={24} color={color} />
        }} />
    </Tabs>
)}