import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiurl = 'https://stark-scrubland-73851.herokuapp.com/';
  constructor(private http: HttpClient) {}

  // get timeline data from REST API
  public getShipmentTimeLine() {
    return this.http.get(this.apiurl + 'shipment');
  }
}
