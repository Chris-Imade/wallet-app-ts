import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
// Icons
import { Ionicons } from "@expo/vector-icons";
// custome component
import { colors } from "../colors";
import { TransactionAviProps } from "./types";

const StyledView = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;me
`;

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <StyledView style={{ backgroundColor: props.background }}>
            <Ionicons name={props.icon} color={colors.white} size={25} />
        </StyledView>
    )
}

export default TransactionAvi;