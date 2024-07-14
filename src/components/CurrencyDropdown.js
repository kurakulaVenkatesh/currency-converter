import React from "react";
import Select from "react-select";

const CurrencyDropdown = ({
 currencies,
 selectedCurrency,
 onChangeCurrency,
}) => {
 // Convert the currencies array to the format required by react-select
 const options = currencies.map((currency) => ({
 value: currency,
 label: currency,
 }));

 // Find the selected currency object from the options array
 const selectedOption = options.find(
 (option) => option.value === selectedCurrency
 );

 return (
 <Select
 value={selectedOption}
 onChange={(option) => onChangeCurrency(option.value)}
 options={options}
 placeholder="Select Currency"
 // className="form-control"
 />
 );
};

export default CurrencyDropdown;