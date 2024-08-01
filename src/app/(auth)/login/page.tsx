"use client"
import {Button} from '@mui/material';
import React, {useState} from 'react'
import {LoginForm} from './LoginForm';
import {USER_ROLE} from "@/app/(auth)/login/LoginDataType";

export default function LoginPage() {

    const [role, setRole] = useState(USER_ROLE.ROLE_CLIENT);

    const handleRoleChange = (newRole: USER_ROLE) => {
        setRole(newRole);
    };

    return (
        <>
            <div className="flex flex-col  items-center">
                <div className={"flex flex-row space-x-4 mt-16 mb-[50px] "}>
                    <Button
                        className={`px-4 py-2 `}
                        onClick={() => handleRoleChange(USER_ROLE.ROLE_ADMIN)}
                        variant={`${role === USER_ROLE.ROLE_ADMIN ? 'contained' : 'outlined'}`}>

                        DEV

                    </Button>

                    <Button
                        className={`px-4 py-2`}
                        onClick={() => handleRoleChange(USER_ROLE.ROLE_ENTERPRISE)}
                        variant={`${role === USER_ROLE.ROLE_ENTERPRISE ? 'contained' : 'outlined'}`}>

                        ENTERPRISE

                    </Button>

                    <Button
                        className={`px-4 py-2 `}
                        onClick={() => handleRoleChange(USER_ROLE.ROLE_CLIENT)}
                        variant={`${role === USER_ROLE.ROLE_CLIENT ? 'contained' : 'outlined'}`}>

                        CLIENT

                    </Button>

                </div>
                <LoginForm role={role}/>
            </div>

            {/*<SignSelect inOrOut='sign-in'></SignSelect>*/}
        </>
    );
}
