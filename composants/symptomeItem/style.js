import { StyleSheet } from "react-native";
import {PADDING} from "../../outils/constance"

const styles = StyleSheet.create({
   item : {
    marginRight  : 15,
    flexDirection : 'row',
    alignItems:'center',
    backgroundColor : 'white',
    borderRadius : 5,
    paddingHorizontal : PADDING.horizontal,
    paddingVertical : PADDING.vertical,
   },
   itemImg:{
    width:60,
    height : 65,
    marginRight : 5
   }
})

export default styles