"use client"
import React from 'react'
import { SideNavItem } from './ProfileNav'
import { ProfileDetailsPageParam } from '../page'
import { useRouter } from 'next/navigation'
import { Divider } from '@mui/material'

export default function ProfileNavItem(
    { params, navItem }: { params: ProfileDetailsPageParam, navItem: SideNavItem }) {

    const router = useRouter();

    function leadToTheNavItemPage() {
        router.push(navItem.path)
    }

    return (
        <>

            <div className=" pl-10 cursor-pointer flex items-center hover:underline hover:text-[#e91e63]  grow text-lg underline-offset-4" onClick={leadToTheNavItemPage}>

                <span className="pr-5">
                    {navItem.icon}
                </span>
                <span>
                    {navItem.name}

                </span>

            </div>

            <Divider />
        </>
    )
}
