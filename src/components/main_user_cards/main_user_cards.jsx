"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "../card/card";
import UserCardModal from "./card_modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { getCardsByUserId } from "../../utils/auth";
import api from "../../api/axios";

const UserCards = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [googleMeetUrl, setGoogleMeetUrl] = useState("");

  const handleOpen = async (card) => {
    setSelectedCard(card);
    const link = await fetchMeetLink();
    setGoogleMeetUrl(link);
    setOpen(true);
  };
  useEffect(() => {
    getCardsByUserId()
      .then((res) => {
        setCards(res);
      })
      .catch((e) => console.log(e));
  }, []);

  const fetchMeetLink = async () => {
    try {
      const response = await api.get("/random-meet");
      return response.data.meetLink;
    } catch (error) {
      console.error("Error fetching meet link:", error);
      return "";
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <div className="flex justify-center items-center flex-col mt-[40px]">
        <h1 className="text-3xl font-semibold">Мои карточки</h1>
        <div
          container
          spacing={2}
          className="mt-10 ml-10  w-4/5 flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5"
        >
          {cards.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              onClick={() => handleOpen(card)}
            >
              <Card
                title={card.title}
                author={card.author}
                status={card.status}
              />
            </Grid>
          ))}
        </div>
      </div>
      <UserCardModal
        open={open}
        handleClose={handleClose}
        cardInfo={selectedCard}
        meetLink={googleMeetUrl}
      />
    </Box>
  );
};

export default UserCards;
