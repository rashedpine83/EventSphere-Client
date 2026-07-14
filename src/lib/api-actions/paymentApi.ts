import { clientFetch } from "../core/client";

interface CheckoutResponse {
  success: boolean;
  message: string;
  checkoutUrl: string;
}

export const createCheckoutSession = async (
  registrationId: string,
  token: string,
): Promise<CheckoutResponse> => {
  return await clientFetch<CheckoutResponse>(
    "/api/payment/create-checkout-session",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registrationId,
      }),
    },
  );
};
