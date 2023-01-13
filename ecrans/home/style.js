import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constance";

const dashboardStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: "white",
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  userName: {
    fontSize: 16,
  },
  //styliser la flatList
  scrollableList: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  scrollableListItem: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 15,
    backgroundColor: "white",
    elevation: 1,
  },
  mainText: {
    fontWeight : 'bold',
    fontSize : 16,
    
  },
  subText: {
    marginTop : 10,
    fontSize : 12
  },
  fakeDataImg:{
    width:48,
    height:48
  }
});

export default dashboardStyles;
