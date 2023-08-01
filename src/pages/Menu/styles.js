import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "800",
        color: Colors.primary,
    },
    customStyle: {
        // position: "absolute",
        // bottom: RFPercentage(0),
        // marginBottom: RFPercentage(5),
        alignSelf: 'center',
        padding: RFPercentage(1),
        paddingHorizontal: RFPercentage(4),
        backgroundColor: Colors.white,
        marginTop: '20%',
        borderRadius: RFPercentage(3)
    },
});