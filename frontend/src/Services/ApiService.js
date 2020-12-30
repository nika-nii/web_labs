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
        return await this.getResource(`/posts/?user=${user_id}`)
    }

    async getComments(post_id) {
        return await this.getResource(`/comments/?post=${post_id}`)
    }

    async getPost(id) {
        return await this.getResource(`/posts/${id}/`)
    }

    async getUser(id) {
        return await this.getResource(`/users/${id}/`)
    }

    async getContent(id) {
        return await this.getResource(`/contents/?parent=${id}`)
    }

    async getUserId(){
        const accessToken = localStorage.getItem('access')
        console.log(accessToken)
        try{
            const response = await axios({
                method: 'get',
                url: `${this._apiBase}/get_my_id/`,
                headers: {
                    "Authorization" : `Bearer ${accessToken}`
                }
            });
            return response.data;
        }
        catch (e){
            console.log("Не получилось")
            return null
        }
    }
}