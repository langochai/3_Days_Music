import {initializeApp} from "firebase/app";
import config from '../../firebase.config';
import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from "firebase/storage";

initializeApp(config);
const storage = getStorage();

class FirebaseController {
    static async getUrlFile(req, res) {
        try {
            const storageRef = ref(storage, `files/${req.file.originalname}`);
            const metadata = {contentType: req.file.mimetype};
            const snapshot = await uploadBytesResumable(
                storageRef,
                req.file.buffer,
                metadata
            );
            const downloadURL = await getDownloadURL(snapshot.ref);
            res.status(200).json(
                {
                    message: 'Tải lên thành công.',
                    firebaseUrl: downloadURL
                }
            )
        } catch (err) {
            console.log(err.message);
        }
    }
}

export default FirebaseController;