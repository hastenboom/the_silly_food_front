import RestaurantCard from '@/app/components/HomePage/RestaurantCard'
import React from 'react'



const restaurant = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
export default function FavoritesPage() {
    return (
        <>
             <h1 className="text-center font-semibold text-2xl py-10">
                Your favorite restaurants
                    </h1>
            <div className="flex flex-wrap items-center justify-around gap-5">
              {/*  {
                    restaurant.map((item) => <RestaurantCard key={item} />)
                }*/}

            </div>
        </>

    )
}
