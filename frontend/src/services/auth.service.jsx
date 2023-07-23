import axios from "axios";

class AuthService {
    static async login(data) {
        return await axios.post('http://localhost:3000/api/login', data);
    }

    static async register(data) {
        return await axios.post('http://localhost:3000/api/register', data);
    }
}

export default AuthService;