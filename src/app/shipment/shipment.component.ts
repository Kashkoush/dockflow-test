import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentService } from '../shipment.service';
import { TimelineElement } from './horizontal-timeline/timeline-elements';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  name = '';
  content = [];
  shipmentName: string;
  seaMovements: any;
  data: any;

  timeline: TimelineElement[] = [];
  // Loader Variable
  loading = true;
  errorMessage = false;

  constructor(private route: ActivatedRoute, private shipmentService: ShipmentService) { }

  ngOnInit() {
    // Get the paraemeters from the URL
    const id = +this.route.snapshot.params['id'];

    this.shipmentService.getShimpent(id).subscribe((response: any) => {
      // Beging the loader
      this.loading = true;

      this.data = response;
      console.log(this.data);
      this.shipmentName = this.data.name;
      this.seaMovements = this.data.sea_shipments[0].sea_movements;
      // console.log(this.seaMovements);

      this.timelineCreation();

      // End the loader with success message
      this.loading = false;
    }, error => {
      console.log(error);

      // End the loader with error message
      this.loading = false;
      this.errorMessage = true;
    })

  }

  // Create the appropiate array of objects for the timeline
  timelineCreation() {

    // Initialize the timeline to make the first one selected
    this.timeline = [
      {
        selected: true,
        date: new Date(this.seaMovements[0].vessel_telo_loading.readings[0].reading),
        title: 'Horizontal Timeline',
        content: this.content,
        pickupLocation: this.seaMovements[0].vessel_telo_loading.location.name,
        pickupLocationFlag: this.seaMovements[0].vessel_telo_loading.location.raw_location.un_country,
        dropOffLocation: this.seaMovements[0].vessel_telo_discharge.location.name,
        dropOffLocationFlag: this.seaMovements[0].vessel_telo_discharge.location.raw_location.un_country,
        carrier: this.data.sea_shipments[0].carrier.name,
        bookingReference: this.data.sea_shipments[0].booking_reference,
        arrivalTime: new Date(this.seaMovements[0].vessel_telo_discharge.readings[0].reading),
        bill_of_lading_reference: this.data.sea_shipments[0].bill_of_lading_reference
      }
    ];

    // pushing the rest to the timeline and making it not selected
    for (let i = 1; i < this.seaMovements.length; i++) {
        this.timeline.push(
          {
            selected: false,
            date: new Date(this.seaMovements[i].vessel_telo_loading.readings[0].reading),
            title: 'Horizontal Timeline',
            content: this.content,
            pickupLocation: this.seaMovements[i].vessel_telo_loading.location.name,
            pickupLocationFlag: this.seaMovements[i].vessel_telo_loading.location.raw_location.un_country,
            dropOffLocation: this.seaMovements[i].vessel_telo_discharge.location.name,
            dropOffLocationFlag: this.seaMovements[i].vessel_telo_discharge.location.raw_location.un_country,
            carrier: this.data.sea_shipments[0].carrier.name,
            bookingReference: this.data.sea_shipments[0].booking_reference,
            arrivalTime: new Date(this.seaMovements[i].vessel_telo_discharge.readings[0].reading),
            bill_of_lading_reference: this.data.sea_shipments[0].bill_of_lading_reference
          },
        );

    }

    console.log(this.timeline);
  }

}
