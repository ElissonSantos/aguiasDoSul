import firebase from 'react-native-firebase';
import { ToastAndroid } from 'react-native';

const ref = firebase.database().ref('DesbravadoresVerify/');
const auth = firebase.auth();
const userAuth = firebase.auth().currentUser;

export const updateDesb = async (user) => {
  ref
    .push({
      id: user.id,
      name: user.name,
      dt: user.dt,
      email: user.email,
      unit: user.unit,
      office: user.office,
      verify: user.verify,
    })
    .then(() => {
      ToastAndroid.show(
        'Solicitação de atualização salva com sucesso.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50
      );
    })
    .catch((error) => {
      unsubscribeUser(user);
      ToastAndroid.show(
        'Ocorreu um erro ao pedir atualização do desbravador.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50
      );
    });
};

const reauthenticate = (currentPassword) => {
  const user = auth.currentUser;
  const cred = firebase.auth.EmailAuthProvider.credential(
    user.email,
    currentPassword
  );
  return user.reauthenticateWithCredential(cred);
};

export const updatePassword = async (currentPassword, newPassword) => {
  reauthenticate(currentPassword)
    .then(() => {
      userAuth
        .updatePassword(newPassword)
        .then(() => {
          ToastAndroid.show(
            'Senha atualizada com sucesso.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
          );
        })
        .catch((error) => {
          ToastAndroid.show(
            'Erro ao atualizar a senha.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
          );
        });
    })
    .catch((error) => {
      ToastAndroid.show(
        'A senha atual está errada.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50
      );
    });
  /*
  changeEmail = (currentPassword, newEmail) => {
    this.reauthenticate(currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updateEmail(newEmail).then(() => {
        console.log("Email updated!");
      }).catch((error) => { console.log(error); });
    }).catch((error) => { console.log(error); });
  }
  */
};

const saveUserData = (user) => {
  ref
    .push({
      name: user.name,
      dt: user.dt,
      email: user.email,
      unit: user.unit,
      office: user.office,
      verify: user.verify,
    })
    .then(() => {
      ToastAndroid.show(
        'Desbravador salvo com sucesso.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50
      );
    })
    .catch((error) => {
      unsubscribeUser(user);
      ToastAndroid.show(
        'Ocorreu um erro ao salvar o desbravador.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50
      );
    });
};

const unsubscribeUser = async (user) => {
  await firebase
    .auth()
    .currentUser.delete()
    .then(() => {
      console.log('delete successful?');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserData = async (usersData) => {
  let currentUser = firebase.auth().currentUser;
  if (!currentUser) {
    throw 'Não há usuario cadastrado';
  }
  let currentUserData;

  await Object.keys(usersData).forEach((id) => {
    let userLogado = usersData[id];
    if (userLogado.email === currentUser.email) {
      currentUserData = {
        ...userLogado,
        id,
      };
    }
  });

  return currentUserData;
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
