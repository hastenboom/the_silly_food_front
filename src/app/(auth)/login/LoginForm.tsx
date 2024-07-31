"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Box, Button, Input } from '@mui/material';


const USER_REGEX = /^.{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
/*  */

// const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export function LoginForm({ role }: { role: string }) {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [validUser, setValidUser] = useState(false);

    const [validLogin, setValidLogin] = useState(true);

    const [errMsg, setErrMsg] = useState("");

    const router = useRouter();

    //-------------useEffect
    // check valid username
    useEffect(() => {
        setValidUser(USER_REGEX.test(user))
    }, [user])


    //--------------functions
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        /*         e.preventDefault();
                const data = {
                    username: user,
                    password: password
                }
        
                const response: Result<string> = await myServerAxios.post(`/login/${role}`, data);
        
                if (response.code === 1) {
                    //@ts-ignore, the token shouldn't be null here;
                    localStorage.setItem('token', response.data.token);
                    setValidLogin(true);
                    router.push(`/${role}`)
                } else {
                    setErrMsg(response.msg);
                    setValidLogin(false);
                    // setValidUser(false);
                } */
    }

    return (
        <>
            <section className="w-60 ">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-14">

                    {/*username*/}
                    <div>
                        <label htmlFor='user'>Username:</label>
                        <Input
                            className="w-full"
                            onChange={(e) => setUser(e.target.value)}
                            type="text"
                            placeholder="Enter Your Username" />
                        <p
                            // valid, true, hidden
                            // invalid, false, showoff
                            hidden={validUser || user === ""}
                            className="font-semibold text-red-700">invalid username</p>
                    </div>

                    {/* password*/}
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <Input

                            className="w-full"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter Your password" />
                        {/* <p
                            hidden={validPassword || password === ""}
                            className="font-semibold text-red-700">invalid password</p> */}
                    </div>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Button
                            type="submit"
                            className={`w-14 justify-self-center`}
                            variant='contained'
                        >Login

                        </Button>
                    </Box>

                    <p className={"text-red-700"} hidden={validLogin}>{errMsg}</p>
                </form>
            </section >
        </>
    )
}

