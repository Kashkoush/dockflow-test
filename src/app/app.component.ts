import { Component } from '@angular/core';
import { ShipmentService } from './shipment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dockflow-test';

  constructor(private shipmentService: ShipmentService) {

  }

  ngOnInit() {
    this.shipmentService.getShipments().subscribe((response: Response) => {
      let data = response.json();
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
}
