export const getParsedDate = strDate => {
  const strSplitDate = String(strDate).split(' ');
  let date = new Date(strSplitDate[0]);

  let dd = date.getDate();
  let mm = date.getMonth() + 1; // January is 0!

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const d = new Date();

  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  date = `${dd} ${monthNames[mm - 1]} ${yyyy}`;
  return date.toString();
};

export const getParsedFullDate = strDate => {
  let date = new Date(strDate);

  let dd = date.getDate();
  const mm = date.getMonth();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const d = new Date();

  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  // if (mm < 10) {
  //   mm = `0${mm}`;
  // }
  date = `${dd} ${monthNames[mm]} ${yyyy}`;
  return date.toString();
};
