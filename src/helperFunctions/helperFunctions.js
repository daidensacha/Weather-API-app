// helperFunctions

// Set to localStorage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Get from localStorage
const getFromLocalStorage = key => {
  const storedData = JSON.parse(localStorage.getItem(key));
  return storedData || null;
};

// 
function dateToDay(date) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
  });
}

// Convert hours to time
function hoursToTime(date) {
  return new Date(date).toLocaleTimeString('en-US', {
    weekday: 'long',
  });
}

// Export functions
export { getFromLocalStorage, saveToLocalStorage, dateToDay, hoursToTime };
