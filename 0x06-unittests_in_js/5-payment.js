import { calculateNumber } from './utils';

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
};

export default sendPaymentRequestToApi;
