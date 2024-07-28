import { useState } from 'react';
import api from '../../api/axios';
const foodOptions = [
  { id: 1, name: 'Каша', price: 400 },
  { id: 2, name: 'Яблоко', price: 300 },
  { id: 3, name: 'Бургер', price: 100 },
];

export default function Modal({ showModal, setShowModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urgent, setUrgent] = useState(true);
  const [problemType, setProblemType] = useState('delivery'); // начальное значение "delivery"
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [selectedFood, setSelectedFood] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectFood = (foodItem) => {
    const newSelection = { ...selectedFood };
    if (newSelection[foodItem.id]) {
      delete newSelection[foodItem.id];
    } else {
      newSelection[foodItem.id] = foodItem;
    }
    setSelectedFood(newSelection);
    calculateTotalPrice(newSelection);
  };

  const calculateTotalPrice = (selection) => {
    const total = Object.values(selection).reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cardData = {
      title,
      description,
      urgent,
      problemType,
      address,
      apartment,
      selectedFood,
      totalPrice,
    };

    try {
      const response = await api.post('/create-card', cardData);
      console.log('Card created', response.data);
      setTitle('');
      setDescription('');
      setProblemType('delivery');
      setAddress('');
      setApartment('');
      setSelectedFood({});
      setTotalPrice(0);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-75">
          <div className="relative mx-auto bg-white rounded-lg shadow-lg w-[500px]">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Создать карточку</h3>
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
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Проблема
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Описание
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="problemType" className="block text-sm font-medium text-gray-700">
                  Тип проблемы
                </label>
                <select
                  id="problemType"
                  value={problemType}
                  onChange={(e) => setProblemType(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50"
                  required
                >
                  <option value="delivery">Доставка</option>
                  <option value="translator">Переводчик</option>
                </select>
              </div>

              {problemType === 'delivery' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Адрес
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                      Номер квартиры
                    </label>
                    <input
                      type="text"
                      id="apartment"
                      value={apartment}
                      onChange={(e) => setApartment(e.target.value)}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Выберите еду</label>
                    {foodOptions.map((food) => (
                      <div key={food.id} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={`food-${food.id}`}
                          checked={!!selectedFood[food.id]}
                          onChange={() => handleSelectFood(food)}
                          className="form-checkbox"
                        />
                        <label htmlFor={`food-${food.id}`} className="ml-2">
                          {food.name} - {food.price}₽
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4 font-bold">Итого: {totalPrice}₽</div>
                </>
              )}

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
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Создать
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
