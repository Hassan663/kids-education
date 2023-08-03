import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    titleStyle: (color) => ({
        fontSize: 18,
        fontFamily:'LuckiestGuy-Regular',
        fontWeight: "800",
        color: color&&color,
    }),
    customStyle: (color) => ({
        alignSelf: 'center',
        padding: RFPercentage(1),
        paddingHorizontal: RFPercentage(5),
        backgroundColor: color && color,
        marginTop: '5%',
        borderRadius: RFPercentage(3)
    }),
});