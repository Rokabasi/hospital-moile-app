import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constance";

const dashboardStyles = StyleSheet.create({
  header: {
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems: 'center',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical : PADDING.vertical,
    backgroundColor: "white",
  },
  userImg:{
    width : 50,
    height : 50,
    borderRadius : 50/2,
  },
  userName:{
    fontSize : 16,
  },
  //styliser la flatList
  scrollableList:{
    paddingHorizontal : PADDING.horizontal,
    paddingVertical: paddingVertical,
  },
  scrollableListItem : {

  }
});

export default dashboardStyles;
