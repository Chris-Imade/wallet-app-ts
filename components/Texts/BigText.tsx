import styled from "styled-components/native";
import React, { FunctionComponent } from "react";
import { colors } from "../colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
    font-size: 37px;
    color: ${colors.white};
    text-align: left;
    font-family: Lato-Bold;
`;

const BigText: FunctionComponent<TextProps> = ({ textStyle, children }) => {
    return <><StyledText style={textStyle}>{ children }</StyledText></>
}

export default BigText;