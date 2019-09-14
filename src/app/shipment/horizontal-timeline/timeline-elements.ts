export interface TimelineElement {
  date: Date;
  title: string;
  selected?: boolean;
  content: any;
  pickupLocation: string;
  pickupLocationFlag: string;
  dropOffLocation: string;
  dropOffLocationFlag: string;
  carrier: string;
  bookingReference: string;
  bill_of_lading_reference: string;
  arrivalTime: Date;
}
