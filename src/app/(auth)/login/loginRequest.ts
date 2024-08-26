import React from "react";
import {myServerAxios, RANDOM_TOKEN} from "@/axios/axiosConfig";
import {LoginFormDTO, transRoleIntoStr} from "@/app/(auth)/login/LoginDataType";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {debug} from "@/axios/debugHelper";


export async function handleLoginSubmit(
    e: React.FormEvent<HTMLFormElement>,
    loginFormDTO: LoginFormDTO,
    setValidLogin: (valid: boolean) => void,
    setErrMsg: (msg: string) => void,
    router: AppRouterInstance
) {

    e.preventDefault();

    //@RequestBody

    try {
        const response: Result<string> = await myServerAxios.post(`/login`, loginFormDTO);
        //@ts-ignore, the token shouldn't be null here;
        localStorage.setItem(RANDOM_TOKEN, response.data);
        debug("Login return response.data: " + response.data)

        setValidLogin(true);

        router.push(`/${transRoleIntoStr(loginFormDTO.role)}/profile/${response.data}`)

    } catch (error) {
        // setErrMsg(response.msg);
        setValidLogin(false);
        // setValidUser(false);
    }

}


export async function handleCountdownAndSendCode(
    phone: string,
    setCountdown: (count: number) => void,
    setDisabled: (disabled: boolean) => void
) {
    let remainingTime = 60; // 倒计时总秒数
    setCountdown(remainingTime);
    setDisabled(true); // 禁用按钮

    //json
    //phone is string
    /*        const data = {
                phone: phone
            }*/

    try {
        //@PathVariable
        const requestUrl = '/login/login_code?phone=' + encodeURIComponent(phone);
        const response: Result<string> = await myServerAxios.get(requestUrl);

        //fixme: debug
        console.log(response)
        console.log(response.data);

    } catch (error) {
        console.error('Error sending request:', error);

    } finally {
        const intervalId = setInterval(() => {
            remainingTime -= 1;
            setCountdown(remainingTime);

            if (remainingTime === 0) {
                clearInterval(intervalId);
                setDisabled(false);
            }
        }, 1000);
    }
}