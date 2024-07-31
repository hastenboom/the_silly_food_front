"use client"
import { Button } from '@mui/material';
import React, { useState } from 'react'
import { LoginForm } from './LoginForm';

export default function LoginPage() {

  const [role, setRole] = useState("client");

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);

  };

  return (
    <>
      <div className="flex flex-col  items-center">
        <div className={"flex flex-row space-x-4 mt-16 mb-[50px] "}>
          <Button
            className={`px-4 py-2 `}
            onClick={() => handleRoleChange("dev")}
            variant={`${role === 'dev' ? 'contained' : 'outlined'}`}>

            DEV

          </Button>

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
        <LoginForm role={role} />
      </div >

      {/*<SignSelect inOrOut='sign-in'></SignSelect>*/}
    </>
  );
}
