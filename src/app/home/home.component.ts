import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shipments: [];
  // Loader Variable
  loading = true;
  errorMessage = false;


  constructor(private shipmentService: ShipmentService) { }

  ngOnInit() {
    // Get all shipments
    this.shipmentService.getShipments().subscribe((response: any) => {
      // start loader
      this.loading = true;

      this.shipments = response.data;
      console.log(this.shipments);

      // end loader successfully
      this.loading = false;
    }, error => {
      console.log(error);

      //end loader with errors
      this.loading = false;
      this.errorMessage = true;
    })
  }

}
