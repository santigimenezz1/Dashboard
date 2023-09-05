import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getDownloadURL,  getStorage,  ref, uploadBytes} from 'firebase/storage'
import { v4 } from "uuid";


// config.js
export const cloudinaryConfig = {
  cloudName: 'SantiG',
  apiKey: '168971185123327',
  apiSecret: 'cLd7qJLsLsULAVMijXH_RNx6tdc',
};

const firebaseConfig = {
    apiKey: "AIzaSyDluRnb_JCozf_uUqMeli4-GnC-yHkziUs",
    authDomain: "cascanueces-f0a34.firebaseapp.com",
    projectId: "cascanueces-f0a34",
    storageBucket: "cascanueces-f0a34.appspot.com",
    messagingSenderId: "315086141752",
    appId: "1:315086141752:web:0f6994e8a1aabd46f929cd"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);


export const subirArchivo = async (file) => {
  const storageRef = ref(storage, v4()); // Genera un ID único para el archivo
  try {
    await uploadBytes(storageRef, file);
    // Obten la URL de descarga del archivo después de subirlo
    const downloadURL = await getDownloadURL(storageRef);

    // Devuelve la URL de descarga
    return downloadURL;
  } catch (error) {
    console.error("Error al subir el archivo", error);
    throw error; // Puedes manejar el error en el componente que llama a esta función
  }
};