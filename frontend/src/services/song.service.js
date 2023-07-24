import axios from "axios";

class SongService{
    static async getSongs(){
        return axios.get('http://localhost:3000/user/song/list')
    }
    static async getGenre(){
        return axios.get('http://localhost:3000/user/genre/list')
    }
}
export default SongService