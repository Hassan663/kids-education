import { Image } from 'react-native'
import { styles } from './styles'

export const getImage = (value) => {
    console.log(value, 'valuevaluevalue')
    if (value.toUpperCase() == `A`) return <Image style={styles.imgItem} source={require('../../assets/apple.png')} />
    else if (value.toUpperCase() == `B`) return <Image style={styles.imgItem} source={require('../../assets/Ball.png')} />
    else if (value.toUpperCase() == `C`) return <Image style={styles.imgItem} source={require('../../assets/CAt.png')} />
    else if (value.toUpperCase() == `D`) return <Image style={styles.imgItem} source={require('../../assets/Doll.png')} />
    else if (value.toUpperCase() == `E`) return <Image style={styles.imgItem} source={require('../../assets/Egg.png')} />
    else if (value.toUpperCase() == `F`) return <Image style={styles.imgItem} source={require('../../assets/Frog.png')} />
    else if (value.toUpperCase() == `G`) return <Image style={styles.imgItem} source={require('../../assets/Glass.png')} />
    else if (value.toUpperCase() == `H`) return <Image style={styles.imgItem} source={require('../../assets/Hat.png')} />
    else if (value.toUpperCase() == `I`) return <Image style={styles.imgItem} source={require('../../assets/IceCream.png')} />
    else if (value.toUpperCase() == `J`) return <Image style={styles.imgItem} source={require('../../assets/Jug.png')} />
    else if (value.toUpperCase() == `K`) return <Image style={styles.imgItem} source={require('../../assets/Kite.png')} />
    else if (value.toUpperCase() == `L`) return <Image style={styles.imgItem} source={require('../../assets/Lamp.png')} />
    else if (value.toUpperCase() == `M`) return <Image style={styles.imgItem} source={require('../../assets/Monkey.png')} />
    else if (value.toUpperCase() == `N`) return <Image style={styles.imgItem} source={require('../../assets/Net.png')} />
    else if (value.toUpperCase() == `O`) return <Image style={styles.imgItem} source={require('../../assets/Onion.png')} />
    else if (value.toUpperCase() == `P`) return <Image style={styles.imgItem} source={require('../../assets/Pen.png')} />
    else if (value.toUpperCase() == `Q`) return <Image style={styles.imgItem} source={require('../../assets/Queen.png')} />
    else if (value.toUpperCase() == `R`) return <Image style={styles.imgItem} source={require('../../assets/Ring.png')} />
    else if (value.toUpperCase() == `S`) return <Image style={styles.imgItem} source={require('../../assets/Star.png')} />
    else if (value.toUpperCase() == `T`) return <Image style={styles.imgItem} source={require('../../assets/Train.png')} />
    else if (value.toUpperCase() == `U`) return <Image style={styles.imgItem} source={require('../../assets/Umbrella.png')} />
    else if (value.toUpperCase() == `V`) return <Image style={styles.imgItem} source={require('../../assets/Van.png')} />
    else if (value.toUpperCase() == `W`) return <Image style={styles.imgItem} source={require('../../assets/Watch.png')} />
    else if (value.toUpperCase() == `X`) return <Image style={styles.imgItem} source={require('../../assets/xRay.png')} />
    else if (value.toUpperCase() == `Y`) return <Image style={styles.imgItem} source={require('../../assets/Yak.png')} />
    else if (value.toUpperCase() == `Z`) return <Image style={styles.imgItem} source={require('../../assets/Zebra.png')} />
    else if (value.toUpperCase() == `ا`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Angoor.png')} />
    else if (value.toUpperCase() == `ب`) return <Image style={styles.imgItem} source={require('../../assets/urdu/CAt.png')} />
    else if (value.toUpperCase() == `پ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Onion.png')} />
    else if (value.toUpperCase() == `ت`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Titli.png')} />
    else if (value.toUpperCase() == `ٹ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Television.png')} />
    else if (value.toUpperCase() == `ث`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Samar.png')} />
    else if (value.toUpperCase() == `ج`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Jahaz.png')} />
    else if (value.toUpperCase() == `چ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Chabi.png')} />
    else if (value.toUpperCase() == `ح`) return <Image style={styles.imgItem} source={require('../../assets/urdu/halwa.png')} />
    else if (value.toUpperCase() == `خ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Khargosh.png')} />
    else if (value.toUpperCase() == `د`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Darakht.png')} />
    else if (value.toUpperCase() == `ڈ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Doctor.png')} />
    else if (value.toUpperCase() == `ذ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Zakhira.png')} />
    else if (value.toUpperCase() == `ر`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Rassi.png')} />
    else if (value.toUpperCase() == `ڑ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Gari.png')} />
    else if (value.toUpperCase() == `ز`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Zarafa.png')} />
    else if (value.toUpperCase() == `ژ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Television.png')} />
    else if (value.toUpperCase() == `س`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Seb1.png')} />
    else if (value.toUpperCase() == `ش`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Sher.png')} />
    else if (value.toUpperCase() == `ص`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Sabun.png')} />
    else if (value.toUpperCase() == `ض`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Zaeef.png')} />
    else if (value.toUpperCase() == `ط`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Tota.png')} />
    else if (value.toUpperCase() == `ظ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Zaroof.png')} />
    else if (value.toUpperCase() == `ع`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Ainak.png')} />
    else if (value.toUpperCase() == `غ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Ghubara.png')} />
    else if (value.toUpperCase() == `ف`) return <Image style={styles.imgItem} source={require('../../assets/urdu/fwara.png')} />
    else if (value.toUpperCase() == `ق`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Pen.png')} />
    else if (value.toUpperCase() == `ک`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Kursi.png')} />
    else if (value.toUpperCase() == `گ`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Gajar.png')} />
    else if (value.toUpperCase() == `ل`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Leemo.png')} />
    else if (value.toUpperCase() == `م`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Machli.png')} />
    else if (value.toUpperCase() == `ن`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Naryal.png')} />
    //  else if (value.toUpperCase() == `ں`)  return <Image style={styles.imgItem} source={require('../../assets/urdu/Angoor.png')} />
    else if (value.toUpperCase() == `و`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Warzish.png')} />
    else if (value.toUpperCase() == `ه`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Heera.png')} />
    else if (value.toUpperCase() == 'ء') return <Image style={styles.imgItem} source={require('../../assets/urdu/Chaai.png')} />
    else if (value.toUpperCase() == `ی`) return <Image style={styles.imgItem} source={require('../../assets/urdu/Yakka.png')} />
    // <Image style={styles.imgItem} source={require('../../assets/urdu/Chaai.png')} />
    // else if (value.toUpperCase() == `ے`)  return <Image style={styles.imgItem} source={require('../../assets/urdu/Yakka.png')} />


}