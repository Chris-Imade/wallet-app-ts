import { ReactNode } from 'react';
import { TextStyle, StyleProp } from "react-native";

export interface TextProps {
    textStyle?: StyleProp<TextStyle>;
    children?: ReactNode;
}