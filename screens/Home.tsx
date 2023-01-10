import React, { FunctionComponent } from 'react';
import { Text } from "react-native"; 
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Container } from '../components/shared';
import { colors } from '../components/colors';
import CardSection from '../components/Cards/CardSection';
import logo1 from "../assets/images/mastercard.png";
import logo2 from "../assets/images/visa.png";
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';
import { RootStackParamsList } from "../navigation/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import potrait1 from "../assets/potraits/potrait-1.jpg";
import potrait2 from "../assets/potraits/potrait-2.jpg";
import potrait3 from "../assets/potraits/potrait-3.jpg";
// types
export type Props = StackScreenProps<RootStackParamsList, "Home">;

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;


const Home: FunctionComponent = () => {

    const cardData = [
        {
            id: 1,
            accountNo: "3835323543",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo1
            
        },
        {
            id: 2,
            accountNo: "4366443464",
            balance: 12000.01,
            alias: "Personal Prepaid",
            logo: logo2
        },
        {
            id: 3,
            accountNo: "1410037943",
            balance: 5600.83,
            alias: "School Prepaid",
            logo: logo1
        }
    ]

    const transactionData = [
        {
            id: 1,
            amount: "-$86.00",
            date: "14 Sep 2022",
            title: "Taxi",
            subtitle: "Uber car",
            art: {
                background: colors.primary,
                icon: "car",
            }
        },
        {
            id: 2,
            amount: "-$286.00",
            date: "14 Sep 2022",
            title: "Shopping",
            subtitle: "Ali express",
            art: {
                background: colors.tertiary,
                icon: "cart",
            }
        },
        {
            id: 3,
            amount: "-$586.00",
            date: "14 Aug 2021",
            title: "Travel",
            subtitle: "Emirates",
            art: {
                background: colors.accent,
                icon: "airplane",
            }
        }
    ];

    const sendMoneyData = [
        {
            id: 1,
            amount: "2450.56",
            name: "Coby Andoh",
            background: colors.tertiary,
            img: potrait1
        },
        {
            id: 2,
            amount: "4450.56",
            name: "Harleen Scot",
            background: colors.primary,
            img: potrait2
        },
        {
            id: 3,
            amount: "6250.56",
            name: "Bob Ryan",
            background: colors.accent,
            img: potrait3
        }
    ];

    return (
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={cardData} />
            <TransactionSection data={transactionData} />
            <SendMoneySection data={sendMoneyData} />
        </HomeContainer>
    )
}

export default Home;