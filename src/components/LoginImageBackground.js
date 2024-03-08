import { ImageBackground } from "react-native";
import { styles } from "../styles/styleSheet";


export default function LoginImageBackground({children}) {
    return (
        <ImageBackground source={require('../assets/images/cor.jpg')} resizeMode="cover" style={styles.image}>
            {children}
        </ImageBackground>
    );
}