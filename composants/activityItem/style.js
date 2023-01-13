import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
})

export default styles