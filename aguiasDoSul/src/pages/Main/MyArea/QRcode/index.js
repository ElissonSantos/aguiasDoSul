import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function QRCode() {
  return (
    <View style={styles.container}>
      <Text>QRCode</Text>
    </View>
  );
}

// import React, { useState, useEffect } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
//   Picker,
//   ToastAndroid,
// } from 'react-native';
// import { TextInputMask } from 'react-native-masked-text';
// import CameraRoll from '@react-native-community/cameraroll';
// import RNFS from 'react-native-fs';
// import QRCode from 'react-native-qrcode-svg';

// // import api from '../../services/api';

// export default function QRPage({ route, navigation }) {
//   // const [isLoading, setLoading] = useState(false);
//   // const { desbravador, data } = route.params;
//   // console.log(desbravador);
//   // console.log(data);
//   // const [svg, setSVG] = useState();

//   // console.log(desbravador);

//   // async function save() {}

//   // function saveQrToDisk() {
//   //   svg.toDataURL((data) => {
//   //     RNFS.writeFile(RNFS.CachesDirectoryPath + '/qrcode.png', data, 'base64')
//   //       .then((success) => {
//   //         return CameraRoll.save(
//   //           RNFS.CachesDirectoryPath + '/qrcode.png',
//   //           'qrcode'
//   //         );
//   //       })
//   //       .then(() => {
//   //         ToastAndroid.show('QRCODE salvo na galeria!!', ToastAndroid.SHORT);
//   //       });
//   //   });
//   // }

//   return (
//     <View>
//       <Text>Page Gerar QRCode</Text>
//       {/* <View>
//         <Text style={{ fontSize: 20 }}>{desbravador.id}</Text>
//         <Text style={{ fontSize: 20 }}>{desbravador.name}</Text>
//         <Text style={{ fontSize: 20 }}>{desbravador.dt}</Text>
//         <Text style={{ fontSize: 20 }}>{desbravador.unit}</Text>
//         <Text style={{ fontSize: 20 }}>{desbravador.cargo}</Text>
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   button: {
//     backgroundColor: '#000',
//     margin: 20,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#fff',
//   },
// });
