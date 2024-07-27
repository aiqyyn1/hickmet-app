'use client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MainVolunteer = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpen = (title) => {
    setModalContent(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Моковые данные для карточек
  const cards = [
    { title: 'Проект 1', description: 'Описание проекта 1' },
    { title: 'Проект 2', description: 'Описание проекта 2' },
    { title: 'Проект 3', description: 'Описание проекта 3' },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} className='cursor-pointer'>
          <Card sx={{ maxWidth: 345, mx: 'auto' }}>
            <CardContent>
              <Typography variant="h5" component="div" onClick={() => handleOpen(card.title)}>
                {card.title}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cursor-pointer'
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalContent}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Детали проекта: {modalContent}
          </Typography>
          <Button variant="contained" className='mt-4'>Take</Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default MainVolunteer;
