import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import LoginImageBackground from "../components/LoginImageBackground";
import LoginInput from "../components/LoginInput";
import LoginText from "../components/LoginText";

export default function Login() {
    return (
        <LoginImageBackground>
            <LoginText/>
            <LoginInput/>
            <LoginImage/>
            <LoginButton/>
        </LoginImageBackground>
    );
}