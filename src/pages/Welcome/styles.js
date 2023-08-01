import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'red'
    },
    welcomeHeading: {
        color: Colors.primary,
        fontSize: RFPercentage(3),
        marginTop: RFPercentage(8),
        fontWeight: '800',
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "800",
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