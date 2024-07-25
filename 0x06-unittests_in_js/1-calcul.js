function calculateNumber(type, a, b) {
  const aa = Math.round(a);
  const bb = Math.round(b);
  let c = 0;
  switch (type) {
    case 'SUM':
      c = aa + bb;
      break;
    case 'SUBTRACT':
      c = aa - bb;
      break;
    case 'DIVIDE':
      if (bb === 0) {
        c = 'Error';
      } else {
        c = aa / bb;
      }
      break;
  }
  return c;
}

module.exports = calculateNumber;
