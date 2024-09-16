import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constance";

const styles = StyleSheet.create({
  container: {
    backgroundColor :'white',
    marginTop:10,
    elevation : 5,
    flexDirection : 'row',
    alignItems:'center',
    justifyContent: "space-between",
    paddingVertical : PADDING.vertical,
    paddingHorizontal : PADDING.horizontal
  },

});

export default styles;
