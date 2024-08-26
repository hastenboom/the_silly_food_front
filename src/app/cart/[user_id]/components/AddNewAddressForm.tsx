"use client"
import {Button} from '@mui/material'
import React, {useState} from 'react'
import {myServerAxios} from "@/axios/axiosConfig";

export default function AddNewAddressFormWithinModal({closeModal}) {


    const [shortAddr, setShortAddr] = useState("")
    const [fullAddr, setFullAddr] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")


    async function handleAddNewAddressSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        await myServerAxios.post("/address", {
            shortAddr: shortAddr,
            longAddr: fullAddr,
            latitude: lat,
            longitude: lng
        })


        closeModal();
    }

    return (
        <div>
            <form
                onSubmit={(e) => handleAddNewAddressSubmit(e)}
                className="flex flex-col gap-7">

                <div>
                    <input type="text" onChange={(e) => setShortAddr(e.target.value)}
                           className="h-10 rounded-lg w-full pl-4" placeholder='Short Address'></input>
                </div>


                <div>
                    <input type="text" onChange={(e) => setFullAddr(e.target.value)}
                           className="h-10 rounded-lg w-full pl-4" placeholder='Long Address'></input>
                </div>

                <div>
                    <input type="text" onChange={(e) => setLat(e.target.value)} className="h-10 rounded-lg w-full pl-4"
                           placeholder='Latitude'></input>
                </div>

                <div>
                    <input onChange={(e) => setLng(e.target.value)} className="h-10 rounded-lg w-full pl-4" type="text"
                           placeholder='Longitude'></input>
                </div>

                <Button variant="contained" className="font-bold" fullWidth type="submit">ADD</Button>


            </form>
        </div>
    )
}


