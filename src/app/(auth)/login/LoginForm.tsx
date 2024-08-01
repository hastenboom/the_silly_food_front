"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation';
import {Box, Button, Checkbox, FormControlLabel, Input, Modal, Popover, Typography} from '@mui/material';
import {myServerAxios} from "@/axios/axiosConfig";
import {handleCountdownAndSendCode, handleLoginSubmit} from "@/app/(auth)/login/loginRequest";
import {LoginFormDTO, USER_ROLE} from "@/app/(auth)/login/LoginDataType";
import {string} from "prop-types";


/* Chinese phone number regex */
const PHONE_REGEX = /^1[3-9]\d{9}$/;
const USER_REGEX = /^.{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function LoginForm({role}: { role: USER_ROLE }) {

    /*basic info*/
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");

    /*validation*/
    const [validPhoneNum, setValidPhoneNum] = useState(false);
    const [validLogin, setValidLogin] = useState(true);
    const [errMsg, setErrMsg] = useState("");

    /*mode and terms*/
    const [isPasswordMode, setIsPasswordMode] = useState(true);
    const [isTermsChecked, setIsTermsChecked] = useState(false);

    const loginFormDTO: LoginFormDTO = {
        phone: phone,
        role: role,
        code: code,
        password: password
    };
    /*router*/
    const router = useRouter();

    //-------------useEffect
    // check valid username
    useEffect(() => {
        setValidPhoneNum(PHONE_REGEX.test(phone))
    }, [phone])


    //--------------functions

    return (
        <>
            <section className="w-[300px] ">
                <form
                    onSubmit={(e) => handleLoginSubmit(e, loginFormDTO, setValidLogin, setErrMsg, router)}
                    className="flex flex-col gap-14">

                    {/*username*/}
                    <div>
                        <label htmlFor='phone'>Phone:</label>
                        <div className="flex space-x-5 h-[30px]">
                            <Input
                                className="w-[70%]"
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                placeholder="Enter Your Phone Number"/>

                            {/* ------------------code send button */}
                            {!isPasswordMode && <SendCodeButton isTermsChecked={isTermsChecked} phone={phone}/>}

                        </div>
                        <p
                            // valid, true, hidden
                            // invalid, false, showoff
                            hidden={validPhoneNum || phone === ""}
                            className="font-semibold text-red-700">invalid phone number</p>
                    </div>


                    {/* password or code */}
                    {
                        isPasswordMode ?
                            < div>
                                <label htmlFor='password'>Password:</label>
                                <Input

                                    className="w-full"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Enter Your password"/>
                            </div>

                            :

                            < div>
                                <label htmlFor='code'>Code:</label>
                                <Input

                                    className="w-full"
                                    onChange={(e) => setCode(e.target.value)}
                                    type="text"
                                    placeholder="Enter Code"/>
                            </div>
                    }


                    {/* submit button and switch mode */}
                    <div className="flex justify-between items-center">
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

                        {/* ------ switch mode button */}
                        <SwitchModeButton isPasswordMode={isPasswordMode} setIsPasswordMode={setIsPasswordMode}/>

                    </div>

                    <p className={"text-red-700"} hidden={validLogin}>{errMsg}</p>
                </form>
            </section>

            {!isPasswordMode && <TermsCheckbox isTermsChecked={isTermsChecked} setIsTermsChecked={setIsTermsChecked}/>}
        </>
    )
}

function SendCodeButton({isTermsChecked, phone}: { isTermsChecked: boolean, phone: string }) {
    const [countdown, setCountdown] = useState(0);
    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleCountdownAndSendCode(phone, setCountdown, setDisabled)}
                disabled={!isTermsChecked || disabled}>

                {countdown > 0 ? `${countdown}s` : 'send '}

            </Button>
        </div>
    );
}


function SwitchModeButton({isPasswordMode, setIsPasswordMode}) {

    const handleClick = () => {
        setIsPasswordMode(!isPasswordMode);
    };
    return (
        <Button
            variant="text"
            onClick={handleClick}
            sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
            }}
        >
            <Typography variant="body1" sx={{mr: 1}}>
                {!isPasswordMode ? 'use password' : 'use code'}
            </Typography>
            <Typography variant="body1">→</Typography>
        </Button>
    );
}


function TermsCheckbox({isTermsChecked, setIsTermsChecked}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckboxChange = (event) => {
        // console.log(event.target.checked)
        setIsTermsChecked(event.target.checked);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const termsText = (
        <>
            <Box sx={{}}>
                <Typography variant="body1" gutterBottom>
                    The Service Terms regulates the use of our service and includes the following provisions:
                </Typography>

                <ol>
                    <li>1. When using code, if you have not registered before, the system will automatically create a
                        new account for you.
                    </li>
                    <li>2. Test two, Test two</li>
                    <li>3. Test three, Test three</li>
                </ol>

                <Typography variant="body1" gutterBottom>
                    DO NOT use our service if you DO NOT agree to these terms.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Please regularly check these terms to ensure that you are aware of any changes or updates.
                </Typography>

            </Box>

            <Button variant="contained" color="primary" onClick={handleModalClose}>
                Close
            </Button>

        </>
    );

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isTermsChecked}
                        onChange={handleCheckboxChange}
                        name="termsCheckbox"
                        color="primary"
                    />
                }
                label={
                    <Typography variant="body1">
                        I agree to the{' '}
                        <strong
                            style={{color: '#007bff', cursor: 'pointer'}}
                            onClick={handleModalOpen}
                        >
                            Term
                        </strong>{' '}
                        to Login.
                    </Typography>
                }
            />
            <Modal
                open={isModalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    {termsText}
                </Box>
            </Modal>
        </div>
    );
}