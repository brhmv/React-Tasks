import PropTypes from 'prop-types';
import { useState } from 'react';


function GoodsComponent({name, description, price}){
    const [nameState, setName] = useState(name);
    const [descriptionState, setDescription] = useState(description);
    const [priceState, setPrice] = useState(price);

    return(
        <div>
            <h1>Component</h1>
            <h2>Name: {nameState}</h2>
            <p>Description: {descriptionState}</p>
            <p>Price: ${priceState}</p>
        </div>
    );

}

export default GoodsComponent;

GoodsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};