import { logEvent }
from "../analytics/logEvent";

import { useCartStore }
from "../store/cartStore";

export const handleAction = (
  action?: any
) => {

  if (!action) return;

  logEvent(
    action.type,
    action.payload
  );

  switch (action.type) {

    case "ADD_TO_CART":

      useCartStore
        .getState()
        .addItem(
          action.payload.id,
          action.payload.price
        );

      break;

    case "DEEP_LINK":

      console.log(
        "Navigate:",
        action.payload.url
      );

      break;

    case
      "APPLY_MYSTERY_GIFT_COUPON":

      console.log(
        "Coupon Applied"
      );

      break;

    default:

      console.warn(
        "Unknown Action",
        action.type
      );
  }
};