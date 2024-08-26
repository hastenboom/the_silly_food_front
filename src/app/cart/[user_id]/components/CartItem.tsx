import {Accordion, AccordionDetails, AccordionSummary, Chip, Divider, IconButton} from '@mui/material'
import React, {useEffect, useState} from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CartItemDetails from '@/app/client/profile/[user_id]/orders/components/OrderItemDetails';
import {CartItemType} from "@/app/cart/CartType";
import {myServerAxios} from "@/axios/axiosConfig";
import {RestaurantCardType} from "@/app/MainPageType";


//FIXME: use the real data from the backend
export default function CartItem(
    {cartItemList, restaurantId}: { cartItemList: CartItemType[], restaurantId: number }) {

    const [restaurantName, setRestaurantName] =
        useState<string>("Restaurant Name")

    useEffect(() => {
        async function fetchData() {
            const response: Result<RestaurantCardType> =
                await myServerAxios.get("/restaurant/" + restaurantId);
            if (response.data !== null || response.data !== undefined) {
                //@ts-ignore
                setRestaurantName(response.data.name)
            }
        }

        fetchData();
    }, []);

    return (
        <Accordion>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"

            >

                <div className="flex items-center justify-between space-x-5">
                    <div>
                        <img className="w-[6.5rem] h-[6.5rem] object-cover"
                             src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg" alt=""/>
                    </div>

                    <div className="flex-col space-y-2">
                        {/*restaurant name*/}
                        <div>
                            {restaurantName}
                        </div>
                        {/*TODO: leave it to the backend, total price*/}
                        <div>Total Price: $499</div>
                    </div>

                </div>


            </AccordionSummary>

            <Divider/>

            {/* --------------------------------------- */}

            <AccordionDetails>

                {/*   */}
                {cartItemList
                    .filter((cartItem) => cartItem.restaurantId === restaurantId)
                    .map((cartItem) => {
                        return <CartItemDetails key={cartItem.id} cartItem={cartItem}/>
                    })
                }


            </AccordionDetails>

        </Accordion>
    )
}
