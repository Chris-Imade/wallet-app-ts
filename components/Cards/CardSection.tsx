import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import CardItem from "./CardItem";
import { CardSectionProps } from "./types";

const CardList = styled.FlatList`
    width: 100%;
    flex: 1;
    padding-left: 25px;
    padding-bottom: 15px;
    margin-top: 90px;
`;

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
        <CardList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 25,
                alignItems: "center"
            }}
            data={props.data} 
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={({ item }: any) => <CardItem {...item} />}
        />
    )
}

export default CardSection;