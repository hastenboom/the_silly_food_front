import React from 'react'
import { Button, Card } from '@mui/material'
import HomeWorkIcon from '@mui/icons-material/HomeWork';

export default function AddressCard({ item, showButton, handleSelectAddress }) {


    return (
        <Card className="flex gap-5 w-64 p-5">
            <HomeWorkIcon />
            <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p>
                    High Street, 21st Floor, 123456, London, UK
                </p>
                <div className="flex space-x-2">

                    {showButton && <Button variant="contained" onClick={() => handleSelectAddress()}>select</Button>}

                    <Button variant="outlined"> DELETE </Button>
                </div>
            </div>

        </Card>
    )
}
