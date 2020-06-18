import firebase from 'react-native-firebase';

export const saveUser = async (newUser) => {
  console.log(newUser.email);
  console.log(newUser.password);

  // await firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(user.email, user.password)
  //   .then(() => {
  //     firebase
  //       .database()
  //       .ref('Desbravadores/')
  //       .push({
  //         name: user.name,
  //         dt: user.dt,
  //         email: user.email,
  //         unit: user.unit,
  //         office: user.office,
  //         verify: false,
  //       })
  //       .then(() => {
  //         ToastAndroid.show(
  //           'Desbravador salvo com sucesso.',
  //           ToastAndroid.LONG,
  //           ToastAndroid.TOP,
  //           25,
  //           50
  //         );
  //         navigation.push('Home');
  //       })
  //       .catch((error) => {
  //         ToastAndroid.show(
  //           'Ocorreu um erro ao salvar o desbravador.',
  //           ToastAndroid.LONG,
  //           ToastAndroid.TOP,
  //           25,
  //           50
  //         );
  //       });
  //   })
  //   .catch((error) => {
  //     ToastAndroid.show(
  //       'Ocorreu um erro ao salvar o desbravador.',
  //       ToastAndroid.LONG,
  //       ToastAndroid.TOP,
  //       25,
  //       50
  //     );
  //   });
};

export const usersToApprove = async () => {
  let users;

  await firebase
    .database()
    .ref('Desbravadores/')
    .on('value', (snapshot) => {
      const data = snapshot.val();
      let desbs = [];
      Object.keys(data).forEach((id) => {
        let desb = data[id];
        if (!desb.verify) {
          desbs.push(desb);
        }
      });
      users = desbs;
    });

  return users;
};
