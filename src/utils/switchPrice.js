function switchPrice(selected, sub) {
  switch (selected) {
    case "normal":
      return sub?.price;
    case "medium":
      return sub?.price_mid;
    case "large":
      return sub?.price_large;

    default:
      return "";
  }
}

export default switchPrice;
