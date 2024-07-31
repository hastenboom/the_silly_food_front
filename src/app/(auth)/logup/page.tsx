"use client"
import { Button, Divider } from '@mui/material';
import React, { useState } from 'react'
import LogUpForm from './LogUpForm';

export default function LogUpPage() {
    const [role, setRole] = useState("enter");

    const handleRoleChange = (newRole: string) => {
        setRole(newRole);

    };

    return (
        <>
            <div className="flex flex-col  items-center">
                <div className={"flex flex-row space-x-4 mt-16 mb-[50px] "}>

                    <Button
                        className={`px-4 py-2`}
                        onClick={() => handleRoleChange("enter")}
                        variant={`${role === 'enter' ? 'contained' : 'outlined'}`}>

                        ENTERPRISE

                    </Button>

                    <Button
                        className={`px-4 py-2 `}
                        onClick={() => handleRoleChange("client")}
                        variant={`${role === 'client' ? 'contained' : 'outlined'}`} >

                        CLIENT

                    </Button>
                </div>


                <LogUpForm role={role} />
            </div>

        </>
    );
}
