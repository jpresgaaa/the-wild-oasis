import type { CheckoutButtonProps } from "../../types/types";
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }: CheckoutButtonProps) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      $variation="primary"
      $sizes="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
