import {myServerAxios} from "@/axios/axiosConfig";
import {FoodType, RestaurantPageType} from "@/app/restaurant/RestaurantType";

export async function getRestaurantPageMainData(restaurantId: string) {

    try {
        const response: Result<RestaurantPageType> = await myServerAxios.get(`/restaurant/${restaurantId}`);
        return response.data;
    } catch (error) {
        console.warn(error);
    }
}

export async function getRestaurantFoodByTypeAndCategory(
    restaurantId: string,
    type: string,
    category: string) {

    try {
        const response: Result<FoodType[]> = await myServerAxios.get(`/restaurant/${restaurantId}/food/${type}/${category}`);
        return response.data;
    } catch (error) {
        console.warn(error);
        return undefined;
    }

}

export async function addOneFoodToCart(
    userId: number,
    restaurantId: number,
    foodId: number
) {

    const axiosResponse: Result<any> = await myServerAxios.post(`/cart/${userId}/add/${restaurantId}/${foodId}`);

    if(axiosResponse.code === 1){
        return;
    }else{
        throw new Error(axiosResponse.msg);
    }

}