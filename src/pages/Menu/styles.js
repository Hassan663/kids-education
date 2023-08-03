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
        paddingHorizontal: RFPercentage(4),
        backgroundColor: Colors.white,
        overflow: 'hidden',
        marginTop: '20%',
        borderRadius: RFPercentage(3)
    },
});