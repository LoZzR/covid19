import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "../app.config";
import { Sejour } from "./sejour.model";

@Injectable({
  providedIn: 'root'
})
export class SejourService {

  private static API_ENDPOINT_HOPITALS = AppConfig.API_ENDPOINT + 'hopitals/sejours';

  private sejours: Sejour[] = [];

  constructor(private http: HttpClient) { }

  getSejours(){
    return this.http
      .get<Sejour[]>(
        SejourService.API_ENDPOINT_HOPITALS
      );
  }
}
