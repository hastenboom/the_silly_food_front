import { Accordion, AccordionDetails, AccordionSummary, Chip, Divider, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderItemDetails from '@/app/client/profile/[user_id]/orders/components/OrderItemDetails';


//FIXME: use the real data from the backend
export default function CartItem() {
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
                        <div>Total Price: $499</div>
                    </div>

                </div>




            </AccordionSummary>

            <Divider />

            {/* --------------------------------------- */}

            <AccordionDetails>

                {/* OrderItemDetails is not consistent with the CartItemDetails     */}
                {[1, 1, 1, 1].map((item) => {
                    return <OrderItemDetails />
                })}


            </AccordionDetails>

        </Accordion>
    )
}
