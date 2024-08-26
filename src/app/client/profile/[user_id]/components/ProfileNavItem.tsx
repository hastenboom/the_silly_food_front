"use client"
import React from 'react'
import {SideNavItem} from './ProfileNav'
import {ProfileDetailsPageParam} from '../page'
import {useRouter} from 'next/navigation'
import {Divider} from '@mui/material'
import Link from "next/link";

export default function ProfileNavItem(
    {params, navItem}: { params: ProfileDetailsPageParam, navItem: SideNavItem }) {

    const router = useRouter();


    return (
        <>

            <Link
                className=" pl-10 cursor-pointer flex items-center hover:underline hover:text-[#e91e63]  grow text-lg underline-offset-4"
                href={navItem.path}>
                <div>

                <span className="pr-5">
                    {navItem.icon}
                </span>
                    <span>
                    {navItem.name}
                </span>

                </div>
            </Link>

            <Divider/>
        </>
    )
}
