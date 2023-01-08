import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import BalanceCard from './BalanceCard';
// types
import { BalanceCardProps } from './types';

const BalanceCardSectionBackground = styled.View`
    width: 100%;
    align-item: center;
    flex: 2;
`;


const BalanceCardSection:FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <BalanceCardSectionBackground>
            <BalanceCard {...props} />
        </BalanceCardSectionBackground>
    )
}  

export default BalanceCardSection;