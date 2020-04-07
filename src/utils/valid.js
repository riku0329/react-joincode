export const isValidImage = value => {
  if (!value)
    return "https://i.pinimg.com/originals/51/83/ef/5183ef65b82a66cf573f324e59cf028b.png";

  const validFormats = ["png", "jpeg", "jpg", "svg"];
  const extenstion = value.split(".").pop();
  return validFormats.includes(extenstion);
};

export const defaultIcon = value => {
  if (!value)
    return "https://i.pinimg.com/originals/51/83/ef/5183ef65b82a66cf573f324e59cf028b.png";
};

export const isValidUrl = value => {
  if (!value)
    return "https://i.pinimg.com/originals/51/83/ef/5183ef65b82a66cf573f324e59cf028b.png";

  const exression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(exression);

  return value.match(regex) ? true : false;
};

export const sameAs = (getValues, field) => value => {
  if (!value) return true;
  if (typeof value !== "string") return false;

  const compareToValue = getValues()[field];
  return compareToValue === value;
};
