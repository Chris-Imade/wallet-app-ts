import { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";

// Custome Texts
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyle?: StyleProp<TextStyle>;
    subTextStyle?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            <RegularText textStyle={[ 
                    props.mainTextStyle, 
                    { 
                        color: colors.secondary, 
                        fontSize: 22 
                    } 
                ]}>{props.mainText}</RegularText>
                <SmallText textStyle={[props.subTextStyle, { color: colors.graydark }]}>{props.subText}</SmallText>
        </StyledView>
    )
}

export default Greeting;