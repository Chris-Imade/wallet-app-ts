import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
// types
import { AmountProps } from "./types";

const AmountSectionBackground = styled.View`
    width: 100%;
    padding-top: 5px;
    align-items: center;
    flex: 1;
    margin-top: 30px;
`;

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return (
        <AmountSectionBackground>
            <SmallText textStyle={{ color: colors.secondary, marginBottom: 15 }}>
                Total Balance
            </SmallText>
            <RegularText textStyle={{ color: colors.secondary, fontSize: 28 }}>
                $ {props.balance}
            </RegularText>
        </AmountSectionBackground>
    )
}

export default AmountSection;