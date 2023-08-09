import { Image } from 'react-native'

export const getImage = (value) => {
    if (value.toUpperCase() == `A`) return <Image source={require('../../assets/apple.png')} />
    else if (value.toUpperCase() == `B`) return <Image source={require('../../assets/Ball.png')} />
    else if (value.toUpperCase() == `C`) return <Image source={require('../../assets/CAt.png')} />
    else if (value.toUpperCase() == `D`) return <Image source={require('../../assets/Doll.png')} />
    else if (value.toUpperCase() == `E`) return <Image source={require('../../assets/Egg.png')} />
    else if (value.toUpperCase() == `F`) return <Image source={require('../../assets/Frog.png')} />
    else if (value.toUpperCase() == `G`) return <Image source={require('../../assets/Glass.png')} />
    else if (value.toUpperCase() == `H`) return <Image source={require('../../assets/Hat.png')} />
    else if (value.toUpperCase() == `I`) return <Image source={require('../../assets/IceCream.png')} />
    else if (value.toUpperCase() == `J`) return <Image source={require('../../assets/Jug.png')} />
    else if (value.toUpperCase() == `K`) return <Image source={require('../../assets/Kite.png')} />
    else if (value.toUpperCase() == `L`) return <Image source={require('../../assets/Lamp.png')} />
    else if (value.toUpperCase() == `M`) return <Image source={require('../../assets/Monkey.png')} />
    else if (value.toUpperCase() == `N`) return <Image source={require('../../assets/Net.png')} />
    else if (value.toUpperCase() == `O`) return <Image source={require('../../assets/Onion.png')} />
    else if (value.toUpperCase() == `P`) return <Image source={require('../../assets/Pen.png')} />
    else if (value.toUpperCase() == `Q`) return <Image source={require('../../assets/Queen.png')} />
    else if (value.toUpperCase() == `R`) return <Image source={require('../../assets/Ring.png')} />
    else if (value.toUpperCase() == `S`) return <Image source={require('../../assets/Star.png')} />
    else if (value.toUpperCase() == `T`) return <Image source={require('../../assets/Train.png')} />
    else if (value.toUpperCase() == `U`) return <Image source={require('../../assets/Umbrella.png')} />
    else if (value.toUpperCase() == `V`) return <Image source={require('../../assets/Van.png')} />
    else if (value.toUpperCase() == `W`) return <Image source={require('../../assets/Watch.png')} />
    else if (value.toUpperCase() == `X`) return <Image source={require('../../assets/xRay.png')} />
    else if (value.toUpperCase() == `Y`) return <Image source={require('../../assets/Yak.png')} />
    else if (value.toUpperCase() == `Z`) return <Image source={require('../../assets/Zebra.png')} />


}