import { Injectable } from "@angular/core";
import { Sejour } from "./sejour.model";

@Injectable({
  providedIn: 'root'
})
export class SejourService {

  private sejours: Sejour[] = [];

  getSejours(){
    this.sejours.push(new Sejour(11111, "Zakariae", "EL HICHEM", "Y418055", "CHEIKH ZAID", 285,
    "17/08/2020", "15/09/2020"));
    this.sejours.push(new Sejour(22222, "Adnan", "Zinaoui", "Y418055", "CHEIKH ZAID", 285,
    "17/08/2020", "15/09/2020"));
    this.sejours.push(new Sejour(33333, "Oussama", "BIG DOG", "Y418055", "CHEIKH ZAID", 285,
    "17/08/2020", "15/09/2020"));
    this.sejours.push(new Sejour(11111, "Youssef", "Little Dog", "Y418055", "CHEIKH ZAID", 285,
    "17/08/2020", "15/09/2020"));
    return this.sejours;
  }
}
