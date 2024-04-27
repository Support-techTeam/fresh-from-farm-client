function DateComparisonComponent(
  dateToCompare: string,
  dateDifference: number,
) {
  // Get the current date
  const currentDate = new Date();

  // Convert the dateToCompare string to a Date object
  const comparedDate = new Date(dateToCompare);

  // Calculate the difference in milliseconds
  const differenceInTime = currentDate.getTime() - comparedDate.getTime();

  // Calculate the difference in days
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  // Check if the difference is less than dateDifference or equal to 0, or if the difference

  return differenceInDays < dateDifference ? true : false;
}

export default DateComparisonComponent;
