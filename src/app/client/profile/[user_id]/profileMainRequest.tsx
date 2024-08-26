import {myServerAxios, RANDOM_TOKEN} from "@/axios/axiosConfig";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {UserProfile} from "@/app/client/profile/[user_id]/ClientProfileType";

//http://localhost:3000/client/profile/{user_randomToken}
export async function getBasicClientProfile(userRandomToken: string, router: AppRouterInstance) {
    try {

        const response: Result<UserProfile> = await myServerAxios.get(`/client/profile`);
        /*
        * response.data:
        * avaUrl: "",
        * fullName: "fsdfdsf,
        * id: "1234567890",
        * email: "fsdfdsf@fsdfdsf.fsdfdsf",
        * */
        console.log(`response:data,${response.data}`);
        return response.data;

    } catch (error) {
        console.log("error: " + error);
        router.push("/login");
        return null;
    }
}

export async function clientLogout(router: AppRouterInstance) {

    try {
        const response: Result<string> = await myServerAxios.get(`/client/profile/logout`);
        localStorage.removeItem(RANDOM_TOKEN);
        router.push("/");
    }catch (error) {
        console.log("error: " + error);
    }
}