"use client"
import AddressCard from '@/app/cart/[user_id]/components/AddressCard'
import { Box, Button, Card, Modal } from '@mui/material'
import React from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddNewAddressFormWithinModal from '@/app/cart/[user_id]/components/AddNewAddressForm';

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

export default function AddressesPage() {

    function createOrderUsingSelectedAddress() {

    }


    function createOrder() {

    }

    const handleOpenAddressModal = () => setOpen(true)

    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (

        <>
            <section className="flex justify-center ">
                <div>
                    <h1 className="text-center font-semibold text-2xl py-10">
                        Manage your addresses
                    </h1>

                    {/* select a address */}
                    <div className="flex gap-5 flex-wrap justify-center">
                        {[1, 1, 1, 1, 1].map((item) =>
                            <AddressCard
                                item={item} showButton={false}
                                handleSelectAddress={createOrderUsingSelectedAddress} />)}

                        {/* -------add new Address */}
                        <Card className="flex gap-5 w-64 pl-10  items-center">
                            <AddHomeIcon />
                            <div className="space-y-3 text-gray-500">
                                <h1 className="font-semibold text-lg text-white">New Address</h1>

                                <Button variant="contained" fullWidth onClick={handleOpenAddressModal}>ADD</Button>

                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* modal, disappear when not click on it */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddNewAddressFormWithinModal closeModal={handleClose} />
                </Box>
            </Modal>

        </>

    )
}
