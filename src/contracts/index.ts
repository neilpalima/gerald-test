export interface ResponseErrorInterface extends Error {
  status?: number;
}

export interface FlightInterface {
  id: number;
  airport_arrival_availability_id: number;
  airport_departure_availability_id: number;
}
