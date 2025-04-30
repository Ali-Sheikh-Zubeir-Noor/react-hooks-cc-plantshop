import React, { useState } from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';

function PlantPage({ plants, onAddPlant, onToggleStock }) {
  return (
    <div>
      <NewPlantForm onAddPlant={onAddPlant} />
      <PlantList plants={plants} onToggleStock={onToggleStock} />
    </div>
  );
}

export default PlantPage;



