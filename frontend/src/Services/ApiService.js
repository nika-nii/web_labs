import axios from "axios"

export default class ApiService {

    _apiBase = 'http://localhost:8000/api'

    async getResource(url) {
        try{
            const response = await axios({
                method: 'get',
                url: `${this._apiBase}${url}`,

            });
            return response.data;
        }
        catch (e){
            return null
        }
    }


    async getAllPosts() {
        return await this.getResource('/posts/')
    }

    async getPosts(user_id) {
        return await this.getResource(`/posts?user_id=${user_id}`)
    }

    async getPost(id) {
        return await this.getResource(`/posts/${id}`)
    }

    async getPreferences(){
        const accessToken = localStorage.getItem('access')
        try{
            const response = await axios({
                method: 'get',
                url: `${this._apiBase}/user_preferences/`,
                headers: {
                    "Authorization" : `Bearer ${accessToken}`
                }
            });
            return response.data;
        }
        catch (e){
            return null
        }
    }
}