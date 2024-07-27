"use client";
import React, { useState, useEffect } from "react";
import Card from "../../components/card/card";

const page = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://back/api/cards")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the cards!", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card
        title="Каковы правила хаджа и умры?"
        author="Aikyn Ibraev"
        status="Срочный"
      />
    </div>
  );
};

export default page;