import React, { ReactElement } from 'react'

import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import ProfileNavItem from './ProfileNavItem';
import { ProfileDetailsPageParam } from '../page';

export interface SideNavItem {
    name: string,
    icon: ReactElement,
    path: string
}



export default function ProfileNav({ params }: { params: ProfileDetailsPageParam }) {

    const userId = params.user_id;

    const PREFIX = `/profile/${userId}`


    const sideNavItems: SideNavItem[] = [
        {
            name: "Orders",
            icon: <DeliveryDiningIcon />,
            path: `${PREFIX}/orders`
        },
        {
            name: "Favorites",
            icon: <FavoriteIcon />,
            path: `${PREFIX}/favorites`
        },
        {
            name: "Addresses",
            icon: <HomeWorkIcon />,
            path: `${PREFIX}/addresses`
        },
        {
            name: "Payments",
            icon: <PaymentIcon />,
            path: `${PREFIX}/payments`
        },
        {
            name: "Notifications",
            icon: <NotificationsIcon />,
            path: `${PREFIX}/notifications`
        },
        {
            name: "Events",
            icon: <EventIcon />,
            path: `${PREFIX}/events`
        },
        {
            name: "Logout",
            icon: <LogoutIcon />,
            path: `${PREFIX}/logout`
        }

    ]



    return (
        <div className=" h-[100%] flex flex-col space-y-2">
            {
                sideNavItems.map(
                    (navItem) => <ProfileNavItem key={navItem.path} params={params} navItem={navItem} />)
            }

        </div>
    )
}
