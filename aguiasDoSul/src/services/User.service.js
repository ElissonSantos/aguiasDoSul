import firebase from 'react-native-firebase';
import { ToastAndroid, Alert } from 'react-native';

const database = firebase.database();
const ref = firebase.database().ref('Desbravadores/');
const auth = firebase.auth();

export const saveUser = async (newUser) => {
  auth
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(() => {
      saveUserData(newUser);
    })
    .catch((error) => {
      ToastAndroid.show(
        'Ocorreu um erro ao salvar o desbravador.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50
      );
    });
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

export const updateUser = async (user) => {
  database
    .ref(`Desbravadores/${user.id}`)
    .set({
      name: user.name,
      dt: user.dt,
      email: user.email,
      unit: user.unit,
      office: user.office,
      verify: user.verify,
    })
    .then(() => {
      ToastAndroid.show(
        'Desbravador atualizado com sucesso.',
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
  auth.currentUser
    .delete()
    .then(() => {
      console.log('delete successful?');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserData = async (usersData, usersVerify) => {
  let currentUser = auth.currentUser;
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

  const have = await haveVerify(usersVerify, currentUserData);

  currentUserData = {
    ...currentUserData,
    toVerify: have,
  };

  return currentUserData;
};

const haveVerify = async (usersData, user) => {
  let have = false;

  await Object.keys(usersData).forEach((id) => {
    let toVerify = usersData[id];
    if (toVerify.id === user.id) {
      have = true;
    }
  });

  return have;
};

export const login = async (email, password) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) =>
      Alert.alert('Erro ao realizar o Login.', 'Usuario e/ou senha incorreto.')
    );
};

export const forgotPassword = (email) => {
  auth
    .sendPasswordResetEmail(email)
    .then((user) => {
      Alert.alert(
        'Solicitação concluida.',
        'Por favor, verifique seu email...'
      );
    })
    .catch(function (e) {
      console.log(e);
    });
};

export const usersToApprove = async () => {
  let users;
  ref.on('value', (snapshot) => {
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
