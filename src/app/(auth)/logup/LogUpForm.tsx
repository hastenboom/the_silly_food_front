"use client"

import { Label } from "@mui/icons-material";
import { Box, Button, Input } from "@mui/material";
import { useEffect, useState } from "react";

const USER_REGEX = /^.{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^.{3,23}$/;


export default function LogUpForm({ role }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");


    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [normalMsg, setNormalMsg] = useState("");

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
        setValidEmail(EMAIL_REGEX.test(email));
        setValidPassword(PWD_REGEX.test(password));
    }, [username, email, password])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const data = {
            email: email,
            username: username,
            password: password,
            gender: gender
        };

        if (!validUsername || !validEmail || !validPassword) {
            return;
        }
        // no response, only the msg
        // const response: Result<string> = await myServerAxios.post(`/signup/${role}`, data);
    }


    return (
        <>
            <section className="w-60 ">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-14">

                    {/*email*/}
                    <div>
                        <label htmlFor='user'>Email:</label>
                        <Input

                            className="w-full"
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Enter Your Email" />
                        <p
                            // valid, true, hidden
                            // invalid, false, showoff
                            hidden={validEmail || email === ""}
                            className="font-semibold text-red-700">invalid email</p>
                    </div>

                    {/*username*/}
                    <div>
                        <label htmlFor='user'>Username:</label>
                        <Input

                            className="w-full"
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Enter Your Username" />
                        <p
                            // valid, true, hidden
                            // invalid, false, showoff
                            hidden={validUsername || username === ""}
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
                        <p
                            // valid, true, hidden
                            // invalid, false, showoff
                            hidden={validPassword || password === ""}
                            className="font-semibold text-red-700">invalid password</p>
                    </div>


                    <div className="flex flex-row gap-4">
                        <Label className="items-end">Gender:</Label>
                        <label htmlFor="male">male:</label>
                        <input type="radio" id="male" name="gender" value="MALE" checked={gender === 'male'}
                            onChange={(e) => setGender(e.target.value)} />
                        <label htmlFor="female">female:</label>
                        <input type="radio" id="female" name="gender" value="FEMALE" checked={gender === 'female'}
                            onChange={(e) => setGender(e.target.value)} />
                    </div>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Button
                            type="submit"
                            className={`justify-self-center`}
                            variant='contained'
                        >Log Up

                        </Button>
                    </Box>

                    {/*<p className={"text-red-700"} hidden={validLogin}>{errMsg}</p>*/}
                </form>
            </section>

        </>
    );
}
