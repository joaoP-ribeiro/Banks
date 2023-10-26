import { StyleSheet } from "react-native";
interface Props{
    textColor: string
}

const styles = ({textColor}:Props) => {

    return StyleSheet.create({
        balance: {
            justifyContent: 'center',
            alignItems: 'center'
        },

        text:{
            fontSize: 30,
            color: textColor,
            fontWeight: 'bold'
        },
    })
}

export default styles;
