import { Button, Card } from '@mui/material'
import React from 'react'

export default function PayCardItem() {

    return (
        <Card className="gap-5 w-64 pl-5 py-5 space-y-5  items-center">
            <div className="flex space-x-5">
                <p className="font-semibold">MasterCard</p>
                <img
                    className="w-[40px]"
                    src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mcbc_debit-pos_84px.png"
                    alt=""
                />
            </div>
            <div>
                Credit Card
            </div>

            <div className="text-zinc-500">
                4242 4242 4242 4242
            </div>
            <Button variant='outlined'>DELETE</Button>
        </Card>
    )
}
