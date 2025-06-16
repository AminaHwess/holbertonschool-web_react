const getFullYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

const getFooterCopy = (isIndex) => {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
};

const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};

export { getFullYear, getFooterCopy, getLatestNotification };
