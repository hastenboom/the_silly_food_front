/* eslint-disable @next/next/no-img-element */
"use client"
import { Box, Button, Card, Modal } from '@mui/material'
import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddNewPaymentFormWithModal from './AddNewPaymentFormWithModal';
import CreditCardItem from './CreditCardItem';



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

export default function PaymentPage() {



    const [openAddPayModal, setOpenAddPayModal] = React.useState(false);

    const handleCloseAddPayModal = () => setOpenAddPayModal(false);


    function handleOpenAddPayModal(event): void {
        setOpenAddPayModal(true);
    }

    return (
        <div>
            <h1 className="text-center font-semibold text-2xl py-10">
                Manage your payments
            </h1>

            <div className="flex -gap-5 flex-wrap justify-center space-x-5 space-y-5">

                {[1, 1, 1, 1, 1, 1, 1]
                    .map((item) => <CreditCardItem />)}

                {/* add new card Card */}
                <Card className="gap-5 w-64 py-5 space-y-5  items-center flex flex-col justify-center">
                    <div className="flex space-x-5">
                        <p className="font-semibold">Add a new card</p>

                        <CreditCardIcon />

                    </div>

                    <Button variant='contained' onClick={handleOpenAddPayModal}>ADD</Button>
                </Card>
            </div>


            <Modal
                open={openAddPayModal}
                onClose={handleCloseAddPayModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* form */}
                <Box sx={style}>
                    <AddNewPaymentFormWithModal closeModal={handleCloseAddPayModal} />
                </Box>
            </Modal>

        </div>
    )
}
