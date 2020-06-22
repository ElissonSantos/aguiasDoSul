import { PermissionsAndroid } from 'react-native';

export const requestAllPermissions = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
  } catch (err) {
    console.warn(err);
  }
};
