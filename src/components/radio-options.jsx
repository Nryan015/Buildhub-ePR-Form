import { useState, useEffect } from "react";
import "../styles/style.css";
import RadioOptionInput from "./radio-option-input";
import Attachment from "./attachment";
import EstimatedCostInput from "./estimated-cost-input";
import SetTotalCostInput from "./set-total-cost-input";


function RadioOptions(props) {
  const { onTotalEstimatedCostChange } = props;

  const [numAdditionalSets, setNumAdditionalSets] = useState(0);
  const [quantities, setQuantities] = useState(Array(numAdditionalSets + 1).fill(0));
  const [estimatedPrices, setEstimatedPrices] = useState(Array(numAdditionalSets + 1).fill(0));
  const [totalEstimatedCost, setTotalEstimatedCost] = useState(0);

  const handleAddMore = () => {
    setNumAdditionalSets(prevNum => prevNum + 1);
    setQuantities(prevQuantities => [...prevQuantities, 0]);
    setEstimatedPrices(prevPrices => [...prevPrices, 0]);
  };

  const handleRemove = index => {
    setNumAdditionalSets(prevNum => prevNum - 1);
    setQuantities(prevQuantities => prevQuantities.filter((_, i) => i !== index));
    setEstimatedPrices(prevPrices => prevPrices.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(value);
    setQuantities(newQuantities);
  };

  const handleEstimatedPriceChange = (index, value) => {
    const newPrices = [...estimatedPrices];
    newPrices[index] = parseFloat(value);
    setEstimatedPrices(newPrices);
  };

  const calculateEstimatedCost = (quantity, price) => {
    return quantity * price;
  };

  useEffect(() => {
    const newTotalEstimatedCost = estimatedPrices.map((price, index) => {
      const quantity = quantities[index];
      return calculateEstimatedCost(quantity, price);
    }).reduce((acc, val) => acc + val, 0);
    setTotalEstimatedCost(newTotalEstimatedCost);
    onTotalEstimatedCostChange(newTotalEstimatedCost);
  }, [quantities, estimatedPrices, onTotalEstimatedCostChange]);

  const renderSets = () => {
    return [...Array(numAdditionalSets + 1)].map((_, index) => (
      <div key={index} className="radio-options-set">
        <h3>{index === 0 ? "Set 1" : `Set ${index + 1}`}</h3>
        <RadioOptionInput labelText="Purchase Description" />
        <RadioOptionInput labelText="Remarks" />
        <RadioOptionInput
          labelText="Quantity"
          onChange={(value) => handleQuantityChange(index, value)}
        />
        <RadioOptionInput
          labelText="Estimated Price"
          onChange={(value) => handleEstimatedPriceChange(index, value)}
        />
        <EstimatedCostInput
          labelText="Estimated Cost"
          value={calculateEstimatedCost(quantities[index], estimatedPrices[index])}
        />
        <Attachment labelText="Attachment" />
        {index !== 0 && (
          <button type="button" onClick={() => handleRemove(index)} className="removeButton">
            Remove
          </button>
        )}
      </div>
    ));
  };

  return (
    <div className="radio-options">
      {renderSets()}
      <button type="button" onClick={handleAddMore} className="addButton">
        Add More
      </button>
      <div className="radio-options-set">
        <h3>Total Cost of Item Purchase</h3>
        <SetTotalCostInput
          labelText="Total Cost"
          value={totalEstimatedCost}
        />
      </div>
    </div>
  );
}

export default RadioOptions;


//https://chatgpt.com/c/325f4d84-9ce6-445a-834d-344b59813849