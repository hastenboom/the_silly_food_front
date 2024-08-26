export interface RestaurantPageType {
    id: number,
    openingHours: string,
    images: string,
    name: string,
    desc: string,
    avgRating: number,
    address: string,
    //Burger,Rice,Chicken
    foodCategories: string,
}

export interface FoodType {
    id: number;
    restaurantId: number;
    name: string;
    desc: string;
    images: string; // 通常这里应该是图像 URL 或路径的数组，但这里保持与 JSON 一致
    price: number;
    type: string;
    category: string;
    isAvailable: number;
}