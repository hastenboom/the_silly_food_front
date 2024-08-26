"use client"
import {Avatar, Badge, IconButton, Input} from '@mui/material'
import React, {useEffect, useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {pink} from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import {getBasicClientProfile} from "@/app/client/profile/[user_id]/profileMainRequest";
import {useRouter} from "next/navigation";

const defaultAvaUrl: string = "https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_1280.jpg"

export default function Navbar() {

    const [isLogin, setIsLogin] = useState(false);

    const [userId, setUserId] = useState(" ");
    const [avatarUrl, setAvatarUrl] = useState(defaultAvaUrl);

    const router = useRouter();
    useEffect(() => {

        async function getProfile() {

            const randomToken = localStorage.getItem("random-token");

            if (randomToken) {
                setIsLogin(true);
                setUserId(randomToken);
                const userProfile = await getBasicClientProfile(randomToken, router);
                if (userProfile?.avaUrl != "") {
                    //@ts-ignore
                    setAvatarUrl(userProfile.avaUrl);
                }

            } else {
                setIsLogin(false);
            }
        }

        getProfile();

    }, []);

    return (
        <div className="px-5 z-50 py-[.8rem] bg-[#e91e64] lg:px-20 flex justify-between">

            <Link href="/" className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <span className="pl-4 logo font-semibold text-gray-300 text-2xl">
                    The Food
                </span>

            </Link>

            <div className="flex items-center space-x-4">

                <div className=''>
                    {/* <IconButton > */}
                    <SearchIcon sx={{fontSize: "1.5rem"}}/>
                    {/* </IconButton> */}
                    <Input id="search-input" placeholder='Search Restaurants ...'>
                    </Input>

                </div>

                {/* fixme: the main page should /login, while the rest show /profile */}
                <Link href={isLogin ? `/client/profile/${userId}` : "/login"} className="cursor-pointer">
                    <Avatar alt=" " src={avatarUrl}/>
                </Link>


                {/* fixme: the main page should /login, while the rest show /cart/[user_id] */}
                <Link className='' href={isLogin ? `/cart/${userId}` : '/login'}>

                    <IconButton>
                        <ShoppingCartIcon sx={{fontSize: "1.5rem"}}/>
{/*
                        <Badge badgeContent={"X"} color='secondary'>

                        </Badge>
*/}

                    </IconButton>
                </Link>

            </div>

        </div>
    )
}
