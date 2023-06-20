import moment from 'moment';

export const calculateTimePeriod = (startDate, endDate) => {
  // Convert the user-provided start date into a Moment.js object
  const startMoment = moment(startDate, 'MM, YYYY');

  // Set the end date as either user-provided or current date
  const endMoment = endDate ? moment(endDate, 'MM, YYYY') : moment();

  // Calculate the difference between the start and end dates in years and months
  const duration = moment.duration(endMoment.diff(startMoment));
  const years = duration.years();
  const months = duration.months();

  // Build the output string based on the difference
  let output = '';
  if (years > 0) {
    output += years + ' year' + (years > 1 ? 's' : '');
  }
  if (months > 0) {
    if (output !== '') {
      output += ' and ';
    }
    output += months + ' month' + (months > 1 ? 's' : '');
  }

  // Return the calculated time period
  return output === '' ? 'Just now' : output;
};
