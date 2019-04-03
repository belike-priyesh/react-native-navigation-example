import {Dimensions} from 'react-native'
const {width:MATCH_PARENT_WIDTH,height:MATCH_PARENT_HEIGHT} = Dimensions.get("window");
const {width:FIT_SCREEN_WIDTH,height:FIT_SCREEN_HEIGHT} = Dimensions.get("screen");
export const dimension={
    MATCH_PARENT_WIDTH,
    MATCH_PARENT_HEIGHT,
    FIT_SCREEN_WIDTH,
    FIT_SCREEN_HEIGHT,
    LARGE:42,
    MEDIUM:28,
    SMALL:12,
    BORDER_SMALL:1,
    BORDER_BOLD:3
}

export const color={
    PRIMARY:"#6A1B9A",
    SECONDARY:"#4A148C",
    ACCENT:"#00B0FF"
}