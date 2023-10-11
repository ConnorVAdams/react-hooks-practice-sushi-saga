import { useState } from "react";

function Sushi({ id, name, img_url, price, handleEat }) {
  const [eaten, setEaten] = useState(false)

  const onEat = () => {
    setEaten(!eaten)
    handleEat(id)
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={() => onEat(id)}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
