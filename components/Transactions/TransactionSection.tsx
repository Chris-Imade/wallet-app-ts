import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TransactionSectionProps } from "./types";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
`;

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TransactionList = styled.FlatList`
    width: 100%;
`;

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25 }}>
                <RegularText textStyle={{ fontSize: 19, color: colors.secondary }}>
                    Transaction
                </RegularText>
                <SmallText textStyle={{ color: colors.secondary }}>
                    Recent
                    <Ionicons name="caret-down" size={13} color={colors.graydark} />
                </SmallText>
            </TransactionRow>
            <TransactionList 
                data={props.data} 
                keyExtractor={({ id }: any) => id.toString()}
                contentContainerStyle={{ paddingBottom: 25 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }: any) => <TransactionItem {...item} />}
            />
        </TransactionSectionBackground>
    )
}

export default TransactionSection;