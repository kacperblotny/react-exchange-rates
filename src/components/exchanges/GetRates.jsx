export const getRatesF = async (table) => {
  const response = await fetch(
    `http://api.nbp.pl/api/exchangerates/tables/${table}?format=json`
  )
  const [items] = await response.json()
  return items.rates
}
