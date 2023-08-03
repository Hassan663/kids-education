import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontFamily:'LuckiestGuy-Regular',
        fontWeight: "800",
        color: Colors.primary,
    },
    customStyle: {
        alignSelf: 'center',
        padding: RFPercentage(1),
        paddingHorizontal: RFPercentage(5),
        backgroundColor: Colors.white,
        marginTop: '5%',
        borderRadius: RFPercentage(3)
    },
});