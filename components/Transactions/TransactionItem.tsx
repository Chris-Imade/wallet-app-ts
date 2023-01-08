import React, { FunctionComponent } from 'react';
import { View } from "react-native";
import styled from 'styled-components/native';
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import TransactionAvi from './TransactionAvi';
// types
import { TransactionProps } from './types';

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`;

const LeftView = styled.View`
    flex-direction: row;
    flex: 2;
`;

const RightView = styled.View`
    flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {

    return (
        <TransactionRow>
            <LeftView>
                <TransactionAvi background={props.art.background} icon={props.art.icon} />
                <View style={{ marginLeft: 10 }}>
                    <RegularText textStyle={{
                        color: colors.secondary,
                        textAlign: "left",
                        marginBottom: 5
                    }}>
                        {props.title}
                    </RegularText>
                    <SmallText textStyle={{
                        textAlign: "left",
                        color: colors.graydark
                    }}>
                        {props.subtitle}
                    </SmallText>
                </View>
            </LeftView>
            <RightView>
                    <RegularText textStyle={{
                        color: colors.secondary,
                        textAlign: "right",
                        marginBottom: 5
                    }}>
                        {props.amount}
                    </RegularText>
                    <SmallText textStyle={{
                        textAlign: "right",
                        color: colors.graydark
                    }}>
                        {props.date}
                    </SmallText>
            </RightView>
        </TransactionRow>
    )
}

export default TransactionItem;