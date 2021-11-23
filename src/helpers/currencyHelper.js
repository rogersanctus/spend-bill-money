function CurrencyHelper() {
  return {
    toDollar: function (value, decimalPlaces = 0) {
      const val = Number(value || 0)
      return val.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: decimalPlaces,
        minimumFractionDigits: decimalPlaces
      })
    }
  }
}

export const currencyHelper = CurrencyHelper()
