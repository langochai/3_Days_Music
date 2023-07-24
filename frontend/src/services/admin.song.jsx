import axios from "axios";

class AdminSong {
    static async delete(id) {
        return await axios.delete('http://localhost:3000/admin/song/'+ id);
    }

    static async edit(id, data) {
        return await axios.put('http://localhost:3000/admin/song/'+ id, data);
    }

    static async getSong() {
        return await axios.get('http://localhost:3000/user/song/list');
    }
    static async getOneSong(id) {
        return await axios.get('http://localhost:3000/admin/song/'+ id);
    }
    static async addSong(data) {
        return await axios.post('http://localhost:3000/admin/song/', data);
    }
}

export default AdminSong;