import React, { useContext } from 'react'
import CurrencyFlag from 'react-currency-flags'
import { ExchangeContext } from '../../context/ExchangeContext'
// import { CurrencyFlagIcon } from 'currency-flags'
import { currencySymbols } from './Symbols'

function ObjectDisplay(props) {
  const { data, count } = props

  const { amountProps } = useContext(ExchangeContext)
  const { amount, setAmount } = amountProps

  let fixed
  if (data.length > 100) {
    fixed = 4
  }
  if (data.length < 100) {
    fixed = 2
  }

  return (
    <div className='w-full'>
      <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {data.map((obj, index) => (
          <li
            key={index}
            className='flex justify-between bg-gray-700 rounded p-4 shadow-2xl lg:w-full w-full text-right'
          >
            <p className='my-auto flex'>
              <CurrencyFlag
                currency={obj.code}
                className='my-auto mr-2'
                size='lg'
              />
              <strong className='mr-1 my-auto flex'>{obj.code}</strong>
            </p>
            <div>
              <p>
                {(amount / (obj.bid || obj.mid)).toFixed(fixed)}{' '}
                {currencySymbols[obj.code]}
              </p>

              <h6 className='text-xs text-stone-400'>
                1 PLN = {(1 / (obj.bid || obj.mid)).toFixed(fixed)}
              </h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// md, lg, xl

export default ObjectDisplay
