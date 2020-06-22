import firebase from 'react-native-firebase';

const ref = firebase.database().ref('Units/');

// export const loadUnits = async () => {
//   firebase
//     .database()
//     .ref('Units/')
//     .on('value', (snapshot) => {
//       const data = snapshot.val();
//       setUnits(data);
//     });
// };

// const setUnits = async (snapshot) => {

//   let unitsData = [];

//   console.log(unitsData);
// };

// export const saveUnit = async (newUnit) => {
//   firebase
//     .database()
//     .ref('Units/')
//     .push({
//       name: newUnit.name,
//     })
//     .then(() => {
//       ToastAndroid.show(
//         'Unidade salva com sucesso.',
//         ToastAndroid.LONG,
//         ToastAndroid.TOP,
//         25,
//         50
//       );
//     })
//     .catch((error) => {
//       ToastAndroid.show(
//         'Ocorreu um erro ao salvar a unidade.',
//         ToastAndroid.LONG,
//         ToastAndroid.TOP,
//         25,
//         50
//       );
//     });
// };

export const getUnits = async (units) => {
  let unitsData = [];

  await Object.keys(units).forEach((id) => {
    let unidade = units[id];
    unidade = {
      ...unidade,
      id,
    };
    unitsData.push(unidade);
  });

  return unitsData;
};

// export const usersToApprove = async () => {
//   let users;
//   await firebase
//     .database()
//     .ref('Desbravadores/')
//     .on('value', (snapshot) => {
//       const data = snapshot.val();
//       let desbs = [];
//       Object.keys(data).forEach((id) => {
//         let desb = data[id];
//         if (!desb.verify) {
//           desbs.push(desb);
//         }
//       });
//       users = desbs;
//     });

//   return users;
// };

// export const recoveryUnits = firebase
//   .database()
//   .ref('Units/')
//   .on('value', (event) => {
//     const data = event.val();
//     console.log('Event dentro do on !');
//     console.log(data);
//   });

// const loadUnits = (snapshot) => {
//   const data = snapshot.val();
//   let unitsDb = [];
//   Object.keys(data).forEach((id) => {
//     let unit = {
//       id,
//       name: data[id].name,
//     };
//     unitsDb.push(unit);
//   });
//   console.log(unitsDb);
// };
