import {createStackNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation'
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomeDrawer from './HomeDrawer';
import SplashScreen from './components/SplashScreen'
import ShowPost from './components/ShowPost'
const AppNavigator = createStackNavigator({
    Home:{screen:Login},
    SignUp:{screen:SignUp},
   
},{
    initialRouteName:"Home",
})

const SwitchNav=createSwitchNavigator({
    SplashScreen:SplashScreen,
    SessionScreen:createAppContainer(AppNavigator),
    showPostScreen:{screen:ShowPost},
    MainPage:{
        screen:HomeDrawer,
        navigationOptions:{
        header:null,
    }}
})


export default createAppContainer(SwitchNav)