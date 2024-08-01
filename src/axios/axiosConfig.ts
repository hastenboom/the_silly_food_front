import axios, {InternalAxiosRequestConfig} from "axios";

const SERVER_URL: string = "http://localhost:8080";

const WHITELIST: string[] = [
    "/login",
    "/signup",
]


export const myServerAxios = axios.create({
    baseURL: SERVER_URL
});

myServerAxios.interceptors.request.use(function (config: InternalAxiosRequestConfig) {

    /*whitelist pages*/
    /*
        //@ts-ignore, the url shouldn't be null
        if (!config.url.startsWith("/login/") || !config.url.startsWith("/signup/")) {
            const token: string | null = localStorage.getItem("token");
            if (token !== null) {
                config.headers["token"] = token;
            }

        }
    */

    let isWhiteListed: boolean = false;

    for (const url of WHITELIST) {
        //@ts-ignore, the url shouldn't be null
        if (config.url.startsWith(url)) {
            isWhiteListed = true;
            break;
        }
    }

    if (!isWhiteListed) {
        const token: string | null = localStorage.getItem("token");
        if (token !== null) {
            config.headers["token"] = token;
        }
    }
    return config;

}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// transform into the Result form
myServerAxios.interceptors.response.use(
    function (res) {
        return res.data;
    }
)
