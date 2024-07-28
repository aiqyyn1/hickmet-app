'use client';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '../card/card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getCards } from '../../utils/auth';
import Map from '../map/Map';
import Link from 'next/link';
const MainComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = useState([]);
  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };
  useEffect(() => {
    getCards()
      .then((res) => setCards(res))
      .catch((e) => console.log(e));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const getChatRoom = async () => {
    try {
      const res = await api.post(`/cards/${selectedCard.pilgrimID}/assign/${selectedCard.id}`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box>
      <div className="flex justify-center items-center">
        <div
          container
          spacing={2}
          className="mt-10 ml-10  w-4/5 flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5"
        >
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} onClick={() => handleOpen(card)}>
              <Card title={card.title} author={card.author} description={card.description}></Card>
            </Grid>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box>
          {selectedCard && (
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
              id="my-modal"
            >
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                  <h2 className="text-lg font-bold">{selectedCard?.title}</h2>
                  <div className="mt-2 px-7 py-3">
                    <p className="text-sm text-gray-500">{selectedCard?.description}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Map />
                  </div>
                  <div className=" px-4 py-3">
                    <Link href="/chat" onClick={getChatRoom}>
                      <button className="px-10 py-2   bg-green-500 text-white text-base font-medium rounded-md  shadow-sm hover:bg-gray-700">
                        Take
                      </button>
                    </Link>
                    <button
                      onClick={handleClose}
                      className="px-10 py-2 ml-4  bg-gray-500 text-white text-base font-medium rounded-md  shadow-sm hover:bg-gray-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default MainComponent;
