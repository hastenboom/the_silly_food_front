import React from 'react'
import {Button, Card} from '@mui/material'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import {AddressType} from "@/app/cart/CartType";

// @ts-ignore
export default function AddressCard({addrItem, selectedAddr, setSelectedAddr}) {


    return (
        <Card className="flex gap-5 w-64 p-5">
            <HomeWorkIcon/>
            <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg text-white">{addrItem.shortAddr}</h1>
                <p>
                    {addrItem.longAddr}
                </p>
                <div className="flex space-x-2">

                    <Button variant="contained" disabled={selectedAddr?.id === addrItem.id}
                            onClick={() => setSelectedAddr(addrItem)}>select</Button>

                    <Button variant="outlined"> DELETE </Button>
                </div>
            </div>

        </Card>
    )
}
