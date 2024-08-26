"use client"
/* eslint-disable @next/next/no-img-element */
import {Accordion, AccordionDetails, AccordionSummary, Button} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, {useState} from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {FoodType} from "@/app/restaurant/RestaurantType";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {addOneFoodToCart} from "@/app/restaurant/restaurantPageRequest";
import {getBasicClientProfile} from "@/app/client/profile/[user_id]/profileMainRequest";
import {useRouter} from "next/navigation";


/*TODO: change it into list, and randomly pick it*/
const defaultImgSrc = "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_640.jpg"

export default function FoodCard({foodItem}: { foodItem: FoodType }) {

    // const [userId, setUserId] = useState(-1);
    const router = useRouter();

    async function getUserId() {

        const randomToken = localStorage.getItem("random-token");

        if (randomToken) {
            const userProfile = await getBasicClientProfile(randomToken, router);
            if (userProfile) {
                return userProfile.id;
            } else
                return -1;
        } else {
            router.push("/login")
            return -1;
        }

    }

    async function addToCart() {
        if (foodItem.isAvailable !== 1) {
            return;
        }

        const userId = await getUserId();

        await addOneFoodToCart(
            userId,
            foodItem.restaurantId,
            foodItem.id
        )

    }

    return (

        <Card className={"rounded-lg shadow-md w-[60%]"}>

            <div className="lg:flex items-center justify-between my-3 mx-5 ">
                <div className="lg:flex items-center lg:gap-5">

                    {/*images*/}
                    <img className="w-[7rem] h-[7rem] object-cover rounded-sm"
                         src={foodItem.images === " " ? foodItem.images : defaultImgSrc}
                         alt=""/>

                    <div className="space-y-1 lg:space-y-2 lg:max-w-2xl">
                        {/*food name*/}
                        <p className="font-semibold text-xl">{foodItem.name}</p>
                        {/*food price*/}
                        <p>${foodItem.price}</p>
                        {/*food description*/}
                        <p className="text-gray-400"> {foodItem.desc}</p>
                        <div className={"flex justify-end"}>
                            <Button type="submit" disabled={foodItem.isAvailable == 0}
                                    className="font-extrabold"
                                    onClick={addToCart}
                            >{foodItem.isAvailable === 1 ? "Add to Cart" : "Not Available"}</Button>
                        </div>
                    </div>

                </div>

            </div>

        </Card>

    )
}


/*const ingredientList = [
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
]*/
/*!The old design, I remove it as I don't have time to implement it*/
/*
function DeparecatedAccordion(){
   return((
       <Accordion>

           <AccordionSummary
               expandIcon={<ExpandMoreIcon/>}
               aria-controls="panel1-content"
               id="panel1-header">

               <div className="lg:flex items-center justify-between">
                   <div className="lg:flex items-center lg:gap-5">

                       {/!*images*!/}
                       <img className="w-[7rem] h-[7rem] object-cover"
                            src={foodItem.images === " " ? foodItem.images : defaultImgSrc}
                            alt=""/>

                       <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                           {/!*food name*!/}
                           <p className="font-semibold text-xl">{foodItem.name}</p>
                           {/!*food price*!/}
                           <p>${foodItem.price}</p>
                           {/!*food description*!/}
                           <p className="text-gray-400"> {foodItem.desc}</p>
                       </div>

                   </div>
               </div>
               <div className="pt-5">
                   <Button type="submit" disabled={true}
                           className="font-extrabold">{foodItem.isAvailable === 1 ? "Add to Cart" : "Not Available"}</Button>
               </div>

               {/!*deprecated, as my time is limited*!/}
           </AccordionSummary>

           <AccordionDetails>
               <form>
                   <div className="flex gap-5 flex-wrap">
                       {
                           ingredientList.map((item) =>
                               <div key={item.category}>
                                   <p>{item.category}</p>
                                   <FormGroup>

                                       FIXME: using the backend data to update it

                                       {item.ingredients.map((ingredient) =>

                                           //optional: defaultChecked
                                           <FormControlLabel
                                               control={<Checkbox onChange={() => handleCheckBoxChange(item)}/>}
                                               key={ingredient} label={ingredient}/>
                                       )}

                                       <FormControlLabel required control={<Checkbox />} label="Required" />
                                       <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                                   </FormGroup>
                               </div>
                           )
                       }

                   </div>

                   FIXME:

               </form>


           </AccordionDetails>

       </Accordion>
   )
}
*/
