// WeakMap instance
const weakMap = new WeakMap();

// Function to track the number of times queryAPI is called for each endpoints
const queryAPI = (endpoint) => {
  // Get the count for the endpoint from the weakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += count;

  // Update the count in the weakMap
  weakMap.set(endpoint, count);

  // Check if the count is greater than or equal to 5
  if (count >= 5) throw new Error('Endpoint load too high');
};

export { weakMap, queryAPI };
