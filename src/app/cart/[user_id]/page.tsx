"use client"

import { darkTheme } from '@/theme/DarkTheme'
import { ThemeProvider } from '@emotion/react'
import { Box, Button, Card, Divider, Modal, Typography } from '@mui/material'
import React from 'react'
import CartItem from './components/CartItem'
import AddressCard from './components/AddressCard'
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddNewAddressFormWithinModal from './components/AddNewAddressForm'

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

//FIXME: simulated data

const items = [1, 1, 1, 1]

export default function CartDetailsPage() {



  function createOrderUsingSelectedAddress() {

  }


  function createOrder() {

  }

  const handleOpenAddressModal = () => setOpen(true)

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <ThemeProvider theme={darkTheme}>

      <div>
        <main className="lg:flex justify-between">

          {/* >>>> order details */}
          <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
            {/* <CartItem /> */}
            {[1, 1, 1, 1].map(() => <CartItem />)}

            <Divider />

            {/* summary of the CartItemss */}
            <div className="billDetails px-5 text-sm">
              <p className="font-extralight py-5">Bill Details</p>
              <div className="space-y-3">

                <div className="flex justify-between text-gray-400">
                  <p>Item Total</p>
                  {/* fixme: should be calculated */}
                  <p>$10000</p>
                </div>
                <div className="flex justify-between text-gray-400">
                  <p>Deliver Fee</p>
                  {/* fixme: should be calculated by two addresses */}
                  <p>$1231</p>
                </div>

                <Divider />
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Total pay</p>
                <p>$1231232131</p>
              </div>
            </div>

            <Button className="items-center" onClick={createOrder}>Confirm</Button>
          </section>

          {/* <<<< order details */}

          <Divider orientation="vertical" flexItem />

          <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
            <div>
              <h1 className="text-center font-semibold text-2xl py-10">
                Choose Delivery Address
              </h1>

              {/* select a address */}
              <div className="flex gap-5 flex-wrap justify-center">
                {[1, 1, 1, 1, 1].map((item) =>
                  <AddressCard
                    item={item} showButton={true}
                    handleSelectAddress={createOrderUsingSelectedAddress} />)}

                {/* -------add new Address */}
                <Card className="flex gap-5 w-64 pl-10  items-center">
                  <AddHomeIcon />
                  <div className="space-y-3 text-gray-500">
                    <h1 className="font-semibold text-lg text-white">New Address</h1>

                    <Button variant="outlined" fullWidth onClick={handleOpenAddressModal}>ADD</Button>

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
            <AddNewAddressFormWithinModal closeModal={handleClose} />
          </Box>
        </Modal>

      </div>

    </ThemeProvider >
  )
}
