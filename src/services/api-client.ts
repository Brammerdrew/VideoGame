import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3585307cd8eb46c6805e5591b3cd15aa'
    }
})