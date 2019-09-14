import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  shipData: object;
  disp: boolean;
  carrier: string;
  booking_ref: string;
  bl_ref: string;
  sea_mvmnt: object[];
  now: number;
  month: string;
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  callShipmentData() {
    this.now = Date.now();
    if (!this.shipData) {
      this.dataService.getShipmentTimeLine().subscribe(data => {
        if (data) {
          this.shipData = data;
          this.carrier = data['sea_shipments'][0]['carrier']['name'];
          this.booking_ref = data['sea_shipments'][0]['booking_reference'];
          this.bl_ref = data['sea_shipments'][0]['bill_of_lading_reference'];
          this.sea_mvmnt = data['sea_shipments'][0]['sea_movements'];
          this.disp = true;
        }
      });
    }
  }
}
