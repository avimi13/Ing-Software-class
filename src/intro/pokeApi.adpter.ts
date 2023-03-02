import axios from 'axios';

export class Adapter {
    readonly axios = axios;
    async get <T> (url: string ) {
        const {data } = await this.axios.get<T>(url);
        return data;
    }

    // async post (url: string) {
    //     const {data} = await this.axios.post(url)
    //     return data;
    // }

    // async put (url: string) {
    //     const {data} = await this.axios.put(url)
    //     return data;
    // }
    // async patch (url: string) {
    //     return await this.axios.patch(url)
    // }

    // async delete (url: string) {
    //     return await this.axios
    // }
}