import {Button, Card} from '@mui/material'
import React from 'react'
import {CreditCardType} from "@/app/cart/CartType";

export default function CreditCardItem({creditCardItem, selectedCreditCard, setSelectedCreditCard}: {
    creditCardItem: CreditCardType,
    selectedCreditCard: CreditCardType,
    setSelectedCreditCard: (card: CreditCardType) => void
}) {

    return (
        <Card className="gap-5 w-64 pl-5 py-5 space-y-5  items-center">
            <div className="flex space-x-5">
                <p className="font-semibold">{creditCardItem.issuerName}</p>
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
                {creditCardItem.cardNumber}
            </div>

            <div className="flex space-x-2">
                <Button variant="contained" disabled={selectedCreditCard?.id === creditCardItem?.id}
                        onClick={() => setSelectedCreditCard(creditCardItem)}>select</Button>

                <Button variant="outlined"> DELETE </Button>
            </div>
        </Card>
    )
}
