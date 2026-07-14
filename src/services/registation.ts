export interface RegistrationData {
  attendeeName: string;
  phone: string;
  address: string;
}

export interface RegisterEventResponse {
  success: boolean;
  message: string;

  insertedId: string;

  isPaid: boolean;
}
