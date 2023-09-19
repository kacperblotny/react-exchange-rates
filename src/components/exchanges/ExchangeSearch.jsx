import React from 'react'
import { useState, useContext } from 'react'
import CurrencyFlag from 'react-currency-flags'
import { ExchangeContext } from '../../context/ExchangeContext'

// export const getRates = async (table) => {
//   const response = await fetch(
//     `http://api.nbp.pl/api/exchangerates/tables/${table}?format=json`
//   )
//   const [items] = await response.json()
//   return items.rates
// }

// const table = 'A'

// const data = await getRates(table)

function ExchangeSearch() {
  const { amountProps } = useContext(ExchangeContext)
  const { amount, setAmount } = amountProps

  const { groupProps } = useContext(ExchangeContext)
  const { group, setGroup } = groupProps
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='flex justify-between bg-gray-700 mb-4 sm:mb-8 rounded p-4 shadow-2xl lg:w-96 w-full'>
        <p className='flex'>
          <CurrencyFlag size='lg' currency='PLN' className='my-auto mr-2' />
          <strong className='mr-1 my-auto flex'>PLN</strong>
        </p>

        <input
          type='number'
          defaultValue={1}
          min='1'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className='flex justify-between bg-gray-700 mb-8 rounded p-4 shadow-2xl sm:ml-4'>
        <p className='mr-2'>Tables: </p>
        <select
          name='table'
          id='table'
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
        </select>
      </div>
    </div>
  )
}

export default ExchangeSearch
