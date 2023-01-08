import styled from "styled-components/native";
import React, { FunctionComponent } from "react";
import { colors } from "../colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
    font-size: 15px;
    color: ${colors.white};
    text-align: left;
    font-family: Lato-Bold;
`;

const RegularText: FunctionComponent<TextProps> = ({ textStyle, children }) => {
    return <><StyledText style={textStyle}>{ children }</StyledText></>
}

export default RegularText;