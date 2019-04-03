import {StyleSheet} from 'react-native'
import {dimension,color} from './Themes'
export default styles = StyleSheet.create({
  

    small:{
        paddingTop:dimension.SMALL,
        paddingBottom:dimension.SMALL,
        paddingLeft:dimension.MEDIUM,
        paddingRight:dimension.MEDIUM,
    },


    large:{
        paddingTop:dimension.MEDIUM,
        paddingBottom:dimension.MEDIUM,
        paddingLeft:dimension.LARGE,
        paddingRight:dimension.LARGE,
    },

    filledButton:{
        width:dimension.LARGE,
        backgroundColor:color.PRIMARY
    },

    outLinedButton:{
        borderColor:color.SECONDARY,
        borderWidth:dimension.BORDER_SMALL,
        color:color.PRIMARY
    },

    heading:{
         fontWeight:"bold",
         color:"black",
         fontSize:dimension.LARGE
    },

    subheading:{
        fontWeight:"bold",
        fontSize:dimension.MEDIUM
    },

    text:{
        fontSize:dimension.SMALL
    },

    header:{
        backgroundColor:color.PRIMARY
    }


})
