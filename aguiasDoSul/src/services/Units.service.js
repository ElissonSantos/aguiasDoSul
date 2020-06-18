import firebase from 'react-native-firebase';

export const recoveryUnits = firebase
  .database()
  .ref('Units/')
  .on('value', (event) => {
    const data = event.val();
    console.log('Event dentro do on !');
    console.log(data);
  });

const loadUnits = (snapshot) => {
  const data = snapshot.val();
  let unitsDb = [];
  Object.keys(data).forEach((id) => {
    let unit = {
      id,
      name: data[id].name,
    };
    unitsDb.push(unit);
  });
  console.log(unitsDb);
};
