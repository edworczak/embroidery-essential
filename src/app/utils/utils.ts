import { v4 as uuidv4 } from "uuid";

export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export const getRandomRotation = (
  negativeValue = 12,
  positiveValue = negativeValue
) => {
  const value = !getRandomNumber(1)
    ? `${getRandomNumber(positiveValue)}deg`
    : `-${getRandomNumber(negativeValue)}deg`;
  return `rotate(${value})`;
};

export const rotateElement = (
  negativeValue = 12,
  positiveValue = negativeValue
) => {
  return {
    transform: getRandomRotation(negativeValue, positiveValue),
  };
};

export const getFormattedDate = (systemDate) => {
  if (!systemDate) return;
  const date = new Date(systemDate);
  let dd: string | number = date.getDate();
  let mm: string | number = date.getMonth() + 1;
  const rrrr = date.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return `${dd}.${mm}.${rrrr}`;
};

export const getCurrency = (value, currency = "zł") => {
  return `${value.toFixed(2)} ${currency === "zł" && currency}`;
};

export const getUuid = () => {
  return uuidv4();
};
