import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyDropdown from './CurrencyDropdown';
import DateSelector from './DateSelector';
import availableCurrencies from '../data/availableCurrencies';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [conversionResult, setConversionResult] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  const apiKey = 'eac27543912457a313800d8f';

  useEffect(() => {
    if (sourceCurrency && targetCurrency) {
    }
      fetchExchangeRate();
  }, [sourceCurrency, targetCurrency]);

  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${sourceCurrency}/${targetCurrency}`
      );
      setExchangeRate(response.data.conversion_rate);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  const handleConvert = () => {
    if (exchangeRate) {
      const result = amount * exchangeRate;
      setConversionResult(result.toFixed(2));
    } else {
      setConversionResult('N/A');
    }
  };

  return (
    <div className="currency-converter container mt-3">
      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>From:</label>
        <CurrencyDropdown
          currencies={availableCurrencies}
          selectedCurrency={sourceCurrency}
          onChangeCurrency={setSourceCurrency}
        />
      </div>
      <div className="form-group">
        <label>To:</label>
        <CurrencyDropdown
          currencies={availableCurrencies}
          selectedCurrency={targetCurrency}
          onChangeCurrency={setTargetCurrency}
        />
      </div>
      <div className="form-group">
        <label>Select Date:</label>
        <DateSelector
          selectedDate={selectedDate}
          onChangeDate={setSelectedDate}
        />
      </div>
      <button className="btn btn-primary" onClick={handleConvert}>
        Convert
      </button>
      {conversionResult && (
        <div className="conversion-result">
          <h3>Converted Amount: {conversionResult} {targetCurrency}</h3>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
