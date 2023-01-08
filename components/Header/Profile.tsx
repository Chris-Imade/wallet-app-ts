import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { 
    ImageSourcePropType, 
    StyleProp, 
    ImageStyle, 
    ViewStyle, 
    GestureResponderEvent 
} from "react-native";

const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45%;
    width: 45px;
    border-radius: 15px;
`;

const StyledImage = styled.Image`
    resize-mode: contain;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <StyledView style={props.imgContainerStyle} onPress={props.onPress}>
            <StyledImage style={props.imgStyle} source={props.img} />
        </StyledView>
    )
}

export default Profile;