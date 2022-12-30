import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.utils";

export const getCollectionSnapshot = async (collectionPath) => {
  return await getDocs(collection(db, collectionPath));
};
