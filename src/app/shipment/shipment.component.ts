import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private shipmentService: ShipmentService) { }

  ngOnInit() {
    // Get the paraemeters from the URL
    const id = +this.route.snapshot.params['id'];

    this.shipmentService.getShimpent(id).subscribe((response: Response) => {
      let data = response.json();
      console.log(data);
    }, error => {
      console.log(error);
    })

  }

}
