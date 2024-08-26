"use client"

import {darkTheme} from '@/theme/DarkTheme'
import {ThemeProvider} from '@emotion/react'
import {Box, Button, Card, Divider, Modal, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import CartItem from './components/CartItem'
import AddressCard from './components/AddressCard'
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddNewAddressFormWithinModal from './components/AddNewAddressForm'
import {getBasicClientProfile} from "@/app/client/profile/[user_id]/profileMainRequest";
import {useRouter} from "next/navigation";
import {getCartItemListRequest} from "@/app/cart/[user_id]/cartRequest";
import {AddressType, CartItemType, CreditCardType, OrderType} from "@/app/cart/CartType";
import {myServerAxios} from "@/axios/axiosConfig";
import CreditCardItem from "@/app/client/profile/[user_id]/payments/CreditCardItem";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    outline: "none",
    boxShadow: 24,
    p: 4,
};

export default function CartDetailsPage() {

    function createOrderUsingSelectedAddress() {

    }

    async function createOrder() {
        for (const restaurantId of uniqueRestaurantIdList) {

            let foodIds: number[] = [];
            let quantities: number[] = [];
            for (const cartItem of cartItemList) {
                if (cartItem.restaurantId === restaurantId) {
                    foodIds.push(cartItem.foodId)
                    quantities.push(cartItem.quantity)
                }
            }

            const order = new OrderType(
                restaurantId,
                foodIds,
                quantities,
                selectedAddr!.id,
                selectedCreditCard!.id,
            );

            const response = await myServerAxios.post("/order", order);





        }
    }

    const handleOpenAddressModal = () => setOpen(true)

    const [open, setOpen] = React.useState(false);
    const [cartItemList, setCartItemList] =
        useState<CartItemType[]>([])

    // let uniqueRestaurantIdList: number[] = [];
    const [uniqueRestaurantIdList, setUniqueRestaurantIdList] = useState<number[]>([]);

    const [addressList, setAddressList]
        = useState<AddressType[]>([]);

    const [totalPrice, setTotalPrice] = useState<number>(0.00);

    const [selectedAddr, setSelectedAddr] =
        useState<AddressType>();

    const [creditCardList, setCreditCardList] =
        useState<CreditCardType[]>([]);

    const [selectedCreditCard, setSelectedCreditCard] =
        useState<CreditCardType>();

    const [deliverFee, setDeliverFee]
        = useState<number>(0.00);

    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter();

    useEffect(() => {
        async function getCartItemList() {
            const cartList = await getCartItemListRequest();
            if (cartList) {
                setCartItemList(cartList);

                const uniqueRestaurantIdSet = new Set<number>();
                cartList.forEach(item => uniqueRestaurantIdSet.add(item.restaurantId))

                setUniqueRestaurantIdList(Array.from(uniqueRestaurantIdSet));
            }
        }

        getCartItemList()
    }, [])

    useEffect(() => {
        async function getAddrList() {
            const response: Result<AddressType[]> = await myServerAxios.get("/address");
            if (response.data != null || response.data != undefined) {
                setAddressList(response.data);
            }
        }

        getAddrList()
    }, [])

    useEffect(() => {
        async function fetchTotalPrice() {
            const response: Result<number> = await myServerAxios.get("/cart/totalPrice");
            if (response.data != null || response.data != undefined) {
                setTotalPrice(response.data);
            }
        }

        fetchTotalPrice();

    }, [])

    async function getDeliverFeeByRestaurantId(
        selectedAddrId: number,
        restaurantId: number) {

        const response = await myServerAxios.get(`/cart/deliverFee/${selectedAddrId}/${restaurantId}`);
        if (response.data != null || response.data != undefined) {
            return response.data;
        } else {
            return 0.00;
        }
    }

    useEffect(() => {
        async function getDeliverFee() {
            if (selectedAddr == undefined)
                return
            else {
                setDeliverFee(0.00);
                for (const restaurantId of uniqueRestaurantIdList) {
                    const oneDeliverFee = await getDeliverFeeByRestaurantId(selectedAddr.id, restaurantId);
                    setDeliverFee((prev) => prev + oneDeliverFee)
                }
            }

        }

        getDeliverFee();
    }, [selectedAddr])


    useEffect(() => {
        async function fetchCreditCards() {
            const response = await myServerAxios.get("/creditcard");
            if (response.data != null || response.data != undefined) {
                setCreditCardList(response.data);
            }
        }

        fetchCreditCards();
    }, [])


    return (
        <div>
            <main className="lg:flex justify-between">

                {/* >>>> order details */}
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">

                    {/* <CartItem /> */}
                    {uniqueRestaurantIdList.map((restaurantId) =>

                        <CartItem
                            key={restaurantId}
                            cartItemList={cartItemList}
                            restaurantId={restaurantId}/>)}

                    <Divider/>

                    {/* summary of the CartItemss */}
                    <div className="billDetails px-5 text-sm">
                        <p className="font-extralight py-5">Bill Details</p>
                        <div className="space-y-3">

                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                {/* fixme: should be calculated */}
                                <p>${totalPrice.toFixed(2)}</p>
                            </div>

                            <div className="flex justify-between text-gray-400">
                                <p>Deliver Fee</p>
                                {/* fixme: should be calculated by two addresses */}
                                <p>${deliverFee.toFixed(2)}</p>
                            </div>

                            <Divider/>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Total pay</p>
                            <p>${(totalPrice + deliverFee).toFixed(2)}</p>
                        </div>
                    </div>

                    <Button className="items-center"
                            variant="contained"
                            disabled={selectedAddr == undefined || selectedCreditCard == undefined}
                            onClick={createOrder}>Confirm</Button>
                </section>

                {/* <<<< order details */}

                <Divider orientation="vertical" flexItem/>


                {/*address*/}
                <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">
                            Choose Delivery Address
                        </h1>

                        {/* select an address */}
                        <div className="flex gap-5 flex-wrap justify-center">
                            {
                                addressList.length > 0 &&
                                addressList.map((addrItem) =>
                                    <AddressCard
                                        selectedAddr={selectedAddr}
                                        setSelectedAddr={setSelectedAddr}
                                        key={addrItem.id}
                                        addrItem={addrItem}
                                    />)}

                            {/* -------add new Address */}
                            <Card className="flex gap-5 w-64 pl-10  items-center">
                                <AddHomeIcon/>
                                <div className="space-y-3 text-gray-500">
                                    <h1 className="font-semibold text-lg text-white">New Address</h1>

                                    <Button variant="outlined" fullWidth
                                            onClick={handleOpenAddressModal}>ADD</Button>

                                </div>
                            </Card>
                        </div>
                    </div>
                </section>


                <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">
                            Choose Payment Method
                        </h1>

                        <div className="flex gap-5 flex-wrap justify-center">

                            {creditCardList.length > 0 && creditCardList
                                .map((item) => <CreditCardItem key={item.id} creditCardItem={item}
                                    //@ts-ignore
                                                               selectedCreditCard={selectedCreditCard}
                                                               setSelectedCreditCard={setSelectedCreditCard}/>)}


                            <Card className="flex gap-5 w-64 pl-10  items-center">
                                <AddHomeIcon/>
                                <div className="space-y-3 text-gray-500">
                                    <h1 className="font-semibold text-lg text-white">New Address</h1>

                                    <Button variant="outlined" fullWidth
                                            onClick={handleOpenAddressModal}>ADD</Button>

                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

            </main>

            {/* modal, disappear when not click on it */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddNewAddressFormWithinModal closeModal={handleClose}/>
                </Box>
            </Modal>

        </div>

    )
}
