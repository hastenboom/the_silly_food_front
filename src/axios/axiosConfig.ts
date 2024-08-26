import axios, {InternalAxiosRequestConfig} from "axios";
import {debug} from "@/axios/debugHelper";

const SERVER_URL: string = "http://localhost:8080";

/*白名单是指发送的请求url，比如localhost:8080/login*/
const WHITELIST: string[] = [
    "/login",
    // "/login_code",
    // "/signup",
    "/restaurant",
]

export const RANDOM_TOKEN = "random-token";

export const myServerAxios = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    withCredentials: true,
});

myServerAxios.interceptors.request.use(
    config => {

        debug(">>>>>>> request interceptor");
        // 检查请求的URL是否在白名单中

        debug(`request url: ${config.url}`);
        //@ts-ignore
        const isAllowed = WHITELIST.some(allowedPath => config.url.startsWith(allowedPath));

        // const isAllowed = false;
        if (!isAllowed) {
            debug(`localStorage[random-token]: ${localStorage.getItem(RANDOM_TOKEN)}`)

            config.headers[RANDOM_TOKEN] = localStorage.getItem(RANDOM_TOKEN);

            debug(`headers[random-token]: ${config.headers.get(RANDOM_TOKEN)}`)
        }

        debug("<<<<<<<request interceptor\n\n")
        return config;
    },
    error => {
        // 处理请求错误
        return Promise.reject(error);
    }
)


// transform into the Result form
myServerAxios.interceptors.response.use(
    function (res) {
        return res.data;
    }
)
