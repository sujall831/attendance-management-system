exports.calculateHours = (inTime, outTime) => {
  if (!inTime || !outTime) return 0;

  const diff = new Date(outTime) - new Date(inTime);

  return Number((diff / (1000 * 60 * 60)).toFixed(2));
};