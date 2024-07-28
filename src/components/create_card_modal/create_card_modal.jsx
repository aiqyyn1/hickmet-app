import { useState } from "react";
import api from "../../api/axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Modal({ showModal, setShowModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [urgent, setUrgent] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardData = { title, description, urgent };

    try {
      const response = api.post("create-card", cardData);
      console.log("Card created", response.data);
      setTitle("");
      setDescription("");
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-75">
          <div className="relative  mx-auto bg-white rounded-lg shadow-lg w-[500px]">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Создать карточку
              </h3>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Проблема
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Описание
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Статус
                </label>
                <select
                  id="status"
                  value={urgent ? "Urgent" : "Normal"}
                  onChange={(e) => setUrgent(e.target.value === "Urgent")}
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50"
                >
                  <option value="">Выбери статус</option>
                  <option value="Urgent">Срочный</option>
                  <option value="Normal">Средний</option>
                </select>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => setShowModal(false)}
                >
                  Отменить
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-[#434141] rounded-md hover:bg-blue-700"
                >
                  Создать
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
