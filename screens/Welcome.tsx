import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import RegularButton from "../components/Buttons/RegularButton";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import background from "../assets/images/bg.jpeg";
import { RootStackParamsList } from "../navigation/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
    justify-content: flex-end
`;

// types
type Props = StackScreenProps<RootStackParamsList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {

    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background}></TopImage>
                </TopSection>
                <BottomSection>
                    <BigText textStyle={{ width: "70%", marginBottom: 25 }}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyle={{ width: "70%", marginBottom: 25 }}>
                        Best payment method, connects your money to your friends, family.
                    </SmallText>
                    <RegularButton onPress={() => navigation.navigate("Home")}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    )
}

export default Welcome;