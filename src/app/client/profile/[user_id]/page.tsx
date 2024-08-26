/* eslint-disable @next/next/no-img-element */
"use client"
import React, {useEffect, useState} from 'react'
import ProfileNav from './components/ProfileNav'
import {Button, ThemeProvider} from '@mui/material'
import {darkTheme} from '@/theme/DarkTheme'
import {clientLogout, getBasicClientProfile} from "@/app/client/profile/[user_id]/profileMainRequest";
import {useRouter} from "next/navigation";
import {UserProfile} from "@/app/client/profile/[user_id]/ClientProfileType";

export interface ProfileDetailsPageParam {
    user_id: string
}

const defaultAvaUrl:string = "https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_1280.jpg"

export default function ProfileDetailsPage({params}: { params: ProfileDetailsPageParam }) {

    const [userProfile, setUserProfile] = useState<UserProfile>({
        id: -1,
        fullName: '',
        avaUrl: '',
        email: ''
    });

    const router = useRouter();

    useEffect(() => {

        async function fetchData() {
            let basicClientProfile = await getBasicClientProfile(params.user_id, router);
            if (basicClientProfile !== null) {
                setUserProfile(basicClientProfile!);
            }
        }

        fetchData();

    }, []);


    return (
        // <ThemeProvider theme={darkTheme}>

        <div className=" h-full w-full self-center flex flex-col justify-center items-center space-y-5">

            <img className=" rounded-full h-[300px] w-[300px] "
                 src={`${userProfile.avaUrl !== "" ? userProfile.avaUrl : defaultAvaUrl}`} alt=""/>

            <div className="text-5xl">{userProfile.fullName}</div>

            {/*TODO*/}
            <div className="text-3xl">{userProfile.email === "" ? "Add a email" : userProfile.email}</div>

            <Button variant="outlined" onClick={()=>{clientLogout(router)}} >Logout</Button>

        </div>

        // </ThemeProvider >
    )
}
