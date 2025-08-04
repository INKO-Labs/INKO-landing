import { addDoc, collection } from "firebase/firestore";
import { store } from "./firebase";

export async function registerBetaTester(emailOrId: string) {
  return await addDoc(collection(store, 'BetaTester'), {
    emailOrId,
    createdAt: new Date(),
  });
}