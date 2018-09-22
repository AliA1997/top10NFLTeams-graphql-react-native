import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Home extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Home',
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.header, styles.fontStyles]}>Home</Text>
                <Text onPress={() => this.props.navigation.openDrawer()}>Open Drawer</Text>
                <Text style={[styles.subheader, styles.fontStyles]}>Top 10 NFL Teams and Best Players on those teams.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue'
    },
    header: {
        fontSize: 20,
    },
    fontStyles: {
        letterSpacing: 0.3,
        color: '#000'
    },
    subheader: {
        fontSize: 20
    }
})

export default Home;