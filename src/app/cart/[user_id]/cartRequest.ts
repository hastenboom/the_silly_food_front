import {myServerAxios} from "@/axios/axiosConfig";
import {CartItemType} from "@/app/cart/CartType";

export async function getCartItemListRequest() {
    try {
        const response: Result<CartItemType[]> = await myServerAxios.get('/cart/itemList');
        return response.data;

    } catch (error) {
        console.error(error);
    }
}