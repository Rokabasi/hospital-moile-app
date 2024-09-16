import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constance";


const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : PADDING.horizontal,
        paddingVertical : PADDING.vertical,
    },
    header:{
        backgroundColor : 'white',
        elevation : 5,
        flexDirection : "row",
        padding:10,
        alignItems: "center"
    },
    image:{
        width : 80,
        height :80,
        borderRadius :80/2,
    },
    userInfo : {
        marginLeft :15,
    },
    userName : {
        fontWeight : "bold",
        marginBottom : 8,
    },
    userEmail : {
        marginBottom : 8,
    }
})

export default styles