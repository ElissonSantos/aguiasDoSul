import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function ListDesb() {
  return (
    <View style={styles.container}>
      <Text>ListDesb</Text>
    </View>
  );
}

// import React, { useEffect, useState } from 'react';
// import {
//   ActivityIndicator,
//   FlatList,
//   Text,
//   View,
//   StyleSheet,
// } from 'react-native';
// // import api from '../../../services/api';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// export default function ListUnits({ navigation }) {
//   const [isLoading, setLoading] = useState(true);
//   const [desbravadores, setDesbravadores] = useState([]);

//   // Similar ao componentDidMount e componentDidUpdate:
//   // useEffect(() => {
//   //   loadUnits();
//   // }, []);

//   // async function loadUnits() {
//   //   const response = await api.get('/unidades');
//   //   setUnits(response.data);
//   //   setLoading(false);
//   // }

//   // async function deleteUnit(id) {
//   //   const response = await api.delete(`/unidades/${id}`);
//   //   loadUnits();
//   // }

//   return (
//     <View style={styles.container}>
//       <Text>DESBRAVADORES</Text>
//       {/* {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={units}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <View style={styles.itens}>
//               <Text>{item.nome}</Text>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => {
//                          navigation.navigate('editunit', {
//                     paramsUnit: { id: item.id, name: item.nome },
//                   });
//                 }}>
//                 <Text style={styles.buttonText}>Editar</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => deleteUnit(item.id)}>
//                 <Text style={styles.buttonText}>Apagar</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       )} */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   itens: {
//     margin: 5,
//     backgroundColor: 'pink',
//   },
//   button: {
//     backgroundColor: 'black',
//     borderRadius: 5,
//     margin: 4,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#fff',
//   },
// });
