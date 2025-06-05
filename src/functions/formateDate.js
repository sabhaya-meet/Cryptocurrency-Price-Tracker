export const formateDate = (number) => {
  var myDate = new Date(number);
  return myDate.getDate() + "/" + (myDate.getMonth() + 1);
};
