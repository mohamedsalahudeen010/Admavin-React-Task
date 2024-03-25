import React, { useState } from 'react';
import "./ElementTransfer.css"

function ElementTransfer() {
  const [bucket1Items, setBucket1Items] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [bucket2Items, setBucket2Items] = useState(['Item 5', 'Item 6']);

  const moveItem = (sourceItems, targetItems) => {
    const selectedItems = sourceItems.filter((item, index) => 
    document.getElementById(`item${index}`).checked);

    const updatedSourceItems = sourceItems.filter((item, index) => !document.getElementById(`item${index}`).checked);
    const updatedTargetItems = [...targetItems, ...selectedItems];

    sourceItems === bucket1Items ? setBucket1Items(updatedSourceItems) : setBucket2Items(updatedSourceItems);
    sourceItems === bucket1Items ? setBucket2Items(updatedTargetItems) : setBucket1Items(updatedTargetItems);
  };

  const moveAll = (sourceItems, targetItems) => {
    sourceItems === bucket1Items ? setBucket2Items([...bucket2Items, ...bucket1Items]) : setBucket1Items([...bucket1Items, ...bucket2Items]);
    sourceItems === bucket1Items ? setBucket1Items([]) : setBucket2Items([]);
  };

  return (
    <div className='main-bucket'>
      <div className='bucket1'>
        <h3>Bucket 1</h3>
        <ul>
          {bucket1Items.map((item, index) => (
            <li key={index} className='check-box'>
              <input type="checkbox"
               id={`item${index}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='button-group'>
        <button onClick={() => moveItem(bucket1Items, bucket2Items)}
        className='btn-add'>Add</button>
        <br/><br/>
        <button onClick={() => moveItem(bucket2Items, bucket1Items)}
        className='btn-remove'>Remove</button>
        <br/><br/>
        <button onClick={() => moveAll(bucket1Items, bucket2Items)}
        className='btn-add'>Add All</button>
        <br/><br/>
        <button onClick={() => moveAll(bucket2Items, bucket1Items)}
        className='btn-remove'>Remove All</button>
      </div>

      <div className='bucket2'>
        <h3>Bucket 2</h3>
        <ul>
          {bucket2Items.map((item, index) => (
            <li key={index}
            className='check-box'>
              <input type="checkbox" id={`item${index}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
}

export default ElementTransfer;
