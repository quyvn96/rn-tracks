import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callBack = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callBack);
    return (
        <SafeAreaProvider>
            <SafeAreaView forceInset={{ top: 'always' }}>
                <Map />
                {err ? <Text>{err}</Text> : null}
                <TrackForm />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

TrackCreateScreen.navigationOptions = () => ({
    headerTitle: 'Add Track',
    headerStyle: {
        backgroundColor: '#ffc966',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
});

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);