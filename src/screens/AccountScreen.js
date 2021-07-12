import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaProvider>
            <SafeAreaView forceInset={{ top: 'always' }}>
                <Spacer>
                    <Button title='Sign Out' onPress={signout} />
                </Spacer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

AccountScreen.navigationOptions = () => ({
    headerTitle: 'Account',
    headerStyle: {
        backgroundColor: '#ffc966',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
});

const styles = StyleSheet.create({

});

export default AccountScreen;