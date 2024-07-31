/* eslint-disable @next/next/no-img-element */
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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

export default function MenuCard() {

    function handleCheckBoxChange(item: { category: string; ingredients: string[]; }): void {
        console.log(item)
    }

    return (
        <Accordion>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header">

                <div className="lg:flex items-center justify-between">
                    <div className="lg:flex items-center lg:gap-5">

                        <img className="w-[7rem] h-[7rem] object-cover" src="https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_640.jpg" alt=""/>

                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl">Noodles</p>
                            <p>$499</p>
                            <p className="text-gray-400">desc desc desc desc desc desc desc desc desc desc desc desc desc</p>
                        </div>

                    </div>
                </div>


            </AccordionSummary>

            <AccordionDetails>
                <form>
                    <div className="flex gap-5 flex-wrap">
                        {
                            ingredientList.map((item) =>
                                <div key={item.category}>
                                    <p>{item.category}</p>
                                    <FormGroup >

                                        {/* FIXME: using the backend data to update it */}

                                        {item.ingredients.map((ingredient) =>

                                            //optional: defaultChecked 
                                            <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(item)} />} key={ingredient} label={ingredient} />
                                        )}

                                        {/* <FormControlLabel required control={<Checkbox />} label="Required" />
                                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
                                    </FormGroup>
                                </div>
                            )
                        }

                    </div>

                    {/* FIXME: */}
                    <div className="pt-5">
                        <Button type="submit" disabled={true} className="font-extrabold">{true ? "Add to Cart" : "Not Available"}</Button>
                    </div>
                </form>


            </AccordionDetails>

        </Accordion>
    )
}
