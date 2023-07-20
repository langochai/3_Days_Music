import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase.config";
import {
    getFirestore,
    collection,
    getDocs
}from "firebase/firestore"

initializeApp(firebaseConfig);
export const db = getFirestore()
const collectionRef = collection(db,"music")
getDocs(collectionRef)
    .then(snapshot=>{
        let music = [];
        snapshot.docs.forEach(doc=>{
            music.push({...doc.data()})
        })
        console.log(music)
    })
    .catch(err=>console.log(err))