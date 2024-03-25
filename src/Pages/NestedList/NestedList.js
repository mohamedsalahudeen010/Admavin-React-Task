import React, { useEffect, useState } from 'react'

import NestedList1 from './NestedList1'

function NestedList({items}) {
    let list=0
  return (
    <div className='nested'>
        <NestedList1 items={items}
        list={list+1}
        />
    </div>
  )
}

export default NestedList