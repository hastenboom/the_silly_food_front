export interface CartItemType {
    id: number,
    userId: number,
    restaurantId: number,
    foodId: number,
    quantity: number,
}


export interface AddressType {
    id: number,
    userId: number,
    shortAddr: string,
    longAddr: string,
    latitude: number,
    longitude: number,
}


export interface CreditCardType {
    id: number,
    userId: number,
    issuerId: number,
    issuerName: string,
    issuerLogoUrl: string,
    cardNumber: string,
}

export class OrderType {

    constructor(restaurantId: number, foodIds: number[], quantities: number[], addressId: number, creditCardId: number) {
        this.restaurantId = restaurantId;
        this.foodIds = foodIds;
        this.quantities = quantities;
        this.addressId = addressId;
        this.creditCardId = creditCardId;
    }

    restaurantId: number;
    foodIds: number[];
    quantities: number[];
    addressId: number;
    creditCardId: number;
}