import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcomeHeading: {
        color: Colors.primary,
        fontSize: RFPercentage(3),
        marginTop: RFPercentage(8),
        fontFamily: 'LuckiestGuy-Regular',
        textShadowOffset: { width: 6, height: 2 }, // Shadow offset (X and Y)
        textShadowRadius: 5, // Blur radius of the shadow
        textShadowColor: 'rgba(225, 225, 225, 1)', // Shadow color and opacity

    },
    titleStyle: {
        fontSize: 18,
        fontFamily: 'LuckiestGuy-Regular',
        color: Colors.primary,
    },
    customStyle: {
        position: "absolute",
        bottom: RFPercentage(0),
        marginBottom: RFPercentage(5),
        alignSelf: 'center',
        padding: RFPercentage(1),
        paddingHorizontal: RFPercentage(4),
        backgroundColor: Colors.white,
        borderRadius: RFPercentage(3)
    },
    welcomeBg: {
        height: '100%',
        alignItems: "center",
    },
});