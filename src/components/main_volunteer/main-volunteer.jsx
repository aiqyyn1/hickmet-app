'use client';
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '../card/card';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const MainComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Example array of cards
  const cards = [
    {
      title: 'Project 1',
      author: 'Author A',
      status: 'Active',
      description: 'Description of project 1',
    },
    {
      title: 'Project 2',
      author: 'Author B',
      status: 'Pending',
      description: 'Description of project 2',
    },
    {
      title: 'Project 3',
      author: 'Author C',
      status: 'Completed',
      description: 'Description of project 3',
    },
    {
      title: 'Project 3',
      author: 'Author C',
      status: 'Completed',
      description: 'Description of project 3',
    },
   
    
  ];

  return (
    <Box >
      <div className='flex justify-center items-center'>
      <div container spacing={2} className="mt-10 ml-10  w-4/5 flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} onClick={() => handleOpen(card)}>
            <Card title={card.title} author={card.author} status={card.status} />
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
            <>
              <Typography id="modal-title" variant="h6" component="h2">
                {selectedCard.title}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedCard.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default MainComponent;
