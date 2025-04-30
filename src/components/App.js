import React, { useState } from 'react';

function App() {
  const [plants, setPlants] = useState([
    { name: 'Aloe', image: './images/aloe.jpg', price: 15.99, soldOut: false },
    { name: 'ZZ Plant', image: './images/zz-plant.jpg', price: 25.98, soldOut: false },
    { name: 'Pilea peperomioides', image: './images/pilea.jpg', price: 5.99, soldOut: false },
    { name: 'Pothos', image: './images/pothos.jpg', price: 12.11, soldOut: false },
    { name: 'Jade', image: './images/jade.jpg', price: 10.37, soldOut: false },
    { name: 'Monstera Deliciosa', image: './images/monstera.jpg', price: 25.99, soldOut: false },
    { name: 'Fiddle Leaf Fig', image: './images/fiddle-leaf-fig.jpg', price: 55.00, soldOut: false },
  ]);

  const [newPlant, setNewPlant] = useState({ name: '', image: '', price: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlants([...plants, { ...newPlant, soldOut: false }]);
    setNewPlant({ name: '', image: '', price: '' });
  };

  const handleSoldOut = (index) => {
    const updatedPlants = [...plants];
    updatedPlants[index].soldOut = true;
    setPlants(updatedPlants);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>
          Plantsy
          <span className="logo" role="img">
            🌱
          </span>
        </h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <h2>Add a New Plant</h2>
          <label>
            Name:
            <input
              name="name"
              type="text"
              placeholder="Plant name"
              value={newPlant.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Image URL:
            <input
              name="image"
              type="text"
              placeholder="Image URL"
              value={newPlant.image}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              name="price"
              type="number"
              placeholder="Price"
              value={newPlant.price}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Plant</button>
        </form>

        <input
          name="search"
          type="text"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <ul className="cards">
          {filteredPlants.map((plant, index) => (
            <li key={index} className="card" data-testid="plant-item">
              <img alt={plant.name} src={plant.image} />
              <h2>{plant.name}</h2>
              <p>Price: ${plant.price}</p>
              <button onClick={() => handleSoldOut(index)}>
                {plant.soldOut ? 'Sold Out' : 'Mark as Sold Out'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;




