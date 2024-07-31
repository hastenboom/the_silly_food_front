/* eslint-disable @next/next/no-img-element */
"use client"
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderItemDetails from './OrderItemDetails';



const ingredientList = [
    {
        category: "Nuts & seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Protein", "Protein2"]
    },
    {
        category: "bread",
        ingredients: ["Burger bread"]
    }
]



export default function OrderItem() {

    return (

        <Accordion>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"

            >

                <div className="flex items-center justify-between space-x-5">
                    <div>
                        <img className="w-[6.5rem] h-[6.5rem] object-cover" src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg" alt="" />
                    </div>

                    <div className="flex-col space-y-2">
                        <div>
                            xxxxx Restaurant
                        </div>
                        <div className="text-zinc-400 text-sm">
                            Order ID: xxxxxx-xxxxxx-xxxxxx
                        </div>
                        <div>Total Price: $499</div>
                    </div>

                </div>




            </AccordionSummary>

            {/* <Divider /> */}

            {/* --------------------------------------- */}

            <AccordionDetails>
                <div className="flex justify-around">
                    <div className="text-[10px] ">
                        Create At: 2022-01-01 12:00:00
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div className="text-[10px]">
                        Pay At: 2022-01-01 12:00:00
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div className='text-[10px]'>
                        Deliver At: 2022-01-01 12:00:00
                    </div>

                </div>

                <Divider />

                {[1, 1, 1, 1].map((item) => {
                    return <OrderItemDetails />
                })}


            </AccordionDetails>

        </Accordion>
    )
}
