import { View, Text, Image } from "react-native";
import imgs from "../../service/imgs"
import styles from "./style";

interface Props {
    text: any
    img: string
}

export default function Perfil({ text, img }: Props) {
    const imgSrc = imgs[img]
    return (
        <View style={styles.perfil}>
            <View style={styles.container}>
                <Image source={imgSrc} style={styles.image} />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
}
