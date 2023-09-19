import React, { useContext, useEffect, useState } from 'react'
import ObjectDisplay from './ObjectDisplay'
import { getRatesF } from './GetRates'
import { ExchangeContext } from '../../context/ExchangeContext'

// const data = await getRatesF('A')

function ExchangeResult() {
  const { amountProps } = useContext(ExchangeContext)
  const { amount, setAmount } = amountProps

  const { groupProps } = useContext(ExchangeContext)
  const { group, setGroup } = groupProps

  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getRatesF(group)
        setData(fetchedData)
      } catch (error) {
        // Handle error if needed
      }
    }

    if (group) {
      fetchData()
    }
  }, [group])

  return <>{data ? <ObjectDisplay data={data} /> : <p>Loading...</p>}</>
}

export default ExchangeResult
