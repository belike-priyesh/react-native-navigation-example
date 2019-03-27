import {createStackNavigator,createAppContainer} from 'react-navigation'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home'
import HomeDrawer from './HomeDrawer';
const AppNavigator = createStackNavigator({
    Home:{screen:Login},
    SignUp:{screen:SignUp},
    MainPage:{screen:HomeDrawer}
},{
    initialRouteName:"Home"
})

export default createAppContainer(AppNavigator)