import { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushi, endOfColl, reloadSushi, handleEat }) {
  const [endIndex, setEndIndex] = useState(4)

  const currentSushi = sushi.slice(endIndex - 4, endIndex).map(sushi => {
    return <Sushi key={sushi.id} id={sushi.id} {...sushi} handleEat={handleEat}/>
  })

  const handleMore = () =>  {
    if (endIndex < endOfColl) {
      setEndIndex(current => current + 4)
    } else {
      reloadSushi()
    }
  }

  return (
    <div className="belt">
      {currentSushi}
      <MoreButton handleMore={handleMore} />
    </div>
  );
}

export default SushiContainer;
