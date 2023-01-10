import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import BottomSheet from 'reanimated-bottom-sheet';
import SendMoneyItem from './SendMoneyItem';

// components
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
// types
import { SendMoneySectionProps } from './types';
import { color } from 'react-native-reanimated';

const SendMoneySectionBackground = styled.View`
    width: 100%;
    padding-top: 15px;
    background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
    width: 100%;
    flex: auto;
    min-height: 80%;
    padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {



    const sheetRef = React.useRef<BottomSheet>(null);

    const renderContent = () => {
        return (
            <SendMoneySectionBackground>
                <SendMoneyRow style={{ marginBottom: 25 }}>
                    <RegularText textStyle={{ fontSize: 19, color: colors.secondary }}>
                        Send money to
                    </RegularText>
                    <TextButton onPress={() => alert("Add")}>
                        <SmallText textStyle={{ fontWeight: "bold", color: colors.tertiary }}>
                            +Add
                        </SmallText>
                    </TextButton>
                </SendMoneyRow>

                <SendMoneyList 
                    data={props?.data}
                    contentContainerStyle={{
                        alignItems: "flex-start",
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // numColumns={3}
                    keyExtractor={({ id }: any) => id.toString()}
                    renderItem={({ item }: any) => {
                        return (
                            <>
                                {console.log(item)}
                                {console.log("from inside renderItem")}
                                <SendMoneyItem {...item} />
                            </>
                        )
                    }}
                />
            </SendMoneySectionBackground>
        )
    }

    return (
        <BottomSheet 
            ref={sheetRef}
            snapPoints={[240, 85]}
            borderRadius={25}
            initialSnap={1}
            enabledContentTapInteraction={false}
            renderContent={renderContent}
        />
    )
}

export default SendMoneySection;