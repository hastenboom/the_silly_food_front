"use client"
import { Button, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'



/* form */
export default function AddNewPaymentFormWithModal({ closeModal }) {




    const [cardNumber, setCardNumber] = useState("")
    const [cardPassword, setCardPassword] = useState("")
    const [cardType, setCardType] = useState("")


    function handleAddPaySubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(cardNumber)
        console.log(cardPassword)
        console.log(cardType)

        closeModal();

    }

    return (
        <div>
            <form
                onSubmit={(e) => handleAddPaySubmit(e)}
                className="flex flex-col gap-7">

                <div>
                    <input type="text" onChange={(e) => setCardNumber(e.target.value)} className="h-10 rounded-lg w-full pl-4" placeholder='card number'></input>
                </div>

                <div>
                    <input onChange={(e) => setCardPassword(e.target.value)} className="h-10 rounded-lg w-full pl-4" type="text" placeholder='card password'></input>
                </div>

                <select className="bg-zinc-200 h-10 rounded-lg w-full pl-3" onChange={(e) => setCardType(e.target.value)}>

                    <option value="" disabled selected hidden>Choose your card type</option>

                    <option value="mastercard">mastercard</option>

                    <option value="visa">visa</option>
                </select>


                <Button variant="contained" className="font-bold" fullWidth type="submit">ADD</Button>

            </form>
        </div>
    )
}
