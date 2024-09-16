import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constance";

const styles = StyleSheet.create({
  container: {
    padding : 25,
    flexDirection : "row",
    backgroundColor : '#eee',
    justifyContent : "space-between",
    alignItems :'center'
  },
  input : {
    flex : 1,
    backgroundColor :'white',
    padding : 13,
  },
  send : {
    backgroundColor : COLORS.main,
    padding :10,
    paddingHorizontal: 10,
    paddingVertical : 9,
    alignItems : "center",
    color : 'white'
  }
});

export default styles;
