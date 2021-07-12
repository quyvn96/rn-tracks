import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return <>
        <Text style={{ fontSize: 48 }}>{track.name}</Text>
        <MapView
            initialRegion={{
                longitudeDelta: 0.1,
                latitudeDelta: 0.1,
                ...initialCoords
            }}
            style={styles.map}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
    </>
}

TrackDetailScreen.navigationOptions = () => ({
    headerTitle: 'Track Detail',
    headerStyle: {
        backgroundColor: '#ffc966',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
});

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;