import axios from "axios";

class AuthService {
    static async login(data) {
        return await axios.post('http://localhost:3000/api/login', data);
    }
}

export default AuthService;