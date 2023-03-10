import axios from 'axios';

export class Adapter {
    readonly axios = axios;
    async get <T> (url: string ) {
        const {data } = await this.axios.get<T>(url);
        return data;
    }
}