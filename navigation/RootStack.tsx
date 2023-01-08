import React, { FunctionComponent } from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// Icons
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../components/colors';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import avatar from "../assets/images/man.png";
// types
import { CardProps } from "../components/Cards/types";
import { 
    Home, 
    Welcome,
    Balance
} from '../screens';

export type RootStackParamsList = {
    Welcome: undefined;
    Home: undefined;
    Balance: CardProps
}

const RootStack: FunctionComponent = () => {

    const Stack = createStackNavigator<RootStackParamsList>();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#ffffff00",

                        },
                        headerTransparent: true,
                        headerShadowVisible: false,
                        headerTintColor: colors.secondary,
                        headerRight: () => <Profile img={avatar} imgContainerStyle={{ backgroundColor: colors.tertiary }} />,
                        headerRightContainerStyle: {
                            paddingRight: 25
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        }
                    }}
                    initialRouteName='Welcome'
                >
                    <Stack.Screen 
                        name="Home"
                        component={Home}
                        options={{
                            headerTitle: (props) => (
                                <Greeting mainText='Hey Jephthah' subText='Welcome back' {...props} />
                            ),
                            headerLeft: () => <></>,
                        }}
                    />
                    <Stack.Screen 
                        name="Welcome"
                        component={Welcome}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="Balance"
                        component={Balance}
                        options={({ route }) => ({
                            headerTitle: route?.params?.alias,
                            headerTitleAlign: "center",
                            headerBackImage: (props) => <Ionicons name="chevron-back" size={25} color={colors.secondary} {...props}  />,
                            headerLeftContainerStyle: { paddingLeft: 0 }
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default RootStack;