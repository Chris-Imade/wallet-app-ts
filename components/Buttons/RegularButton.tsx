import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle
} from "react-native";

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`;
// types
interface ButtonProps {
    btnStyle?: StyleProp<ViewStyle>;
    children?: ReactNode;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyle?: StyleProp<TextStyle>;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
    <ButtonView style={props.btnStyle} onPress={props.onPress}>
        <RegularText textStyle={props.textStyle}>
            {props.children}
        </RegularText>
    </ButtonView>
    );
}

export default RegularButton;