import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import cardBackgroundImg from "../../assets/images/card-bg.png";
import { BalanceCardProps } from "./types";
import { View } from "react-native";
// App Texts
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const CardBackground = styled.ImageBackground`
    height: 100%;
    width: 100%;
    resize-mode: cover;
    background-color: ${colors.accent}
    border-radius: 25px;
    overflow: hidden;
`;


const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`;

const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Logo = styled.Image`
    width: 100%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`;

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
    
    return (
        <CardBackground source={cardBackgroundImg}>
            <TouchableView>
                <CardRow>
                    <RegularText textStyle={{ color: "white" }}>
                        ******{props?.accountNo?.slice(0, 10)}
                    </RegularText>
                </CardRow>
                <CardRow>
                    <View style={{ flex: 3}}>
                        <SmallText textStyle={{ marginBottom: 5, color: colors.graylight }}>Total Balance</SmallText>
                        <RegularText textStyle={{ fontSize: 19 }}>{props.balance}</RegularText>
                    </View>
                    <Logo source={props.logo} />
                </CardRow>
            </TouchableView>
        </CardBackground>
    )
}

export default BalanceCard;