import {myServerAxios} from "@/axios/axiosConfig";
import {RestaurantCardType} from "@/app/MainPageType";

/*should return the list of cards info*/
export async function getRestaurantCards() {

    try {
        const response: Result<RestaurantCardType[]> = await myServerAxios.get('/restaurant/main/cards');
        //@ts-ignore
        return response.data!;
    } catch (error) {

        return undefined;
    }
}