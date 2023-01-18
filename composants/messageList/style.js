import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constance";

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical : PADDING.vertical,
    paddingHorizontal : PADDING.horizontal  ,
    backgroundColor: 'white',
    marginTop : 15,
    elevation : 5
  },
  messageImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },
  messageInfo: {
    flexDirection: "column",
    flex: 1,
  },
  date_name : {
    flexDirection : "row",
    justifyContent : "space-between",
    marginBottom : 5
  },
  name : {
    fontWeight : "bold",
  }
});

export default styles;
