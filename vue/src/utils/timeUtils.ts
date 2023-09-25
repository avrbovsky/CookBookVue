export const getTimeString = (time: number | undefined) => {
  const preparationTime = time || 0;
  const minutes = preparationTime % 60;
  const hours = (preparationTime / 60) | 0;
  const hoursTime =
    (hours > 0 && `${hours} ${hours > 1 ? 'hours' : 'hour'}`) || '';
  const minutesTime = (minutes > 0 && `${minutes} minutes`) || '';
  const timeString = hoursTime + ' ' + minutesTime;
  return timeString.trim();
};
