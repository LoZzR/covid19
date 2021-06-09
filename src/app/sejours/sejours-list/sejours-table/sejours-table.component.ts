import { Component, OnInit } from '@angular/core';
import { SejourService } from '../../sejour-service.service';
import { Sejour } from '../../sejour.model';

@Component({
  selector: 'app-sejours-table',
  templateUrl: './sejours-table.component.html',
  styleUrls: ['./sejours-table.component.css']
})
export class SejoursTableComponent implements OnInit {

  sejours: Sejour[];
  cols: any[];

  constructor(private sejourService: SejourService) { }

  ngOnInit(): void {
   this.sejourService.getSejours().subscribe(
     (sejours) => {
       this.sejours = sejours;
     }
   );

    this.cols = [
      { field: 'idSejour', header: 'Identifier' },
      { field: 'firstNamePatient', header: 'First Name' },
      { field: 'lastNamePatient', header: 'Last Name' },
      { field: 'cin', header: 'CIN' },
      { field: 'hospitalName', header: 'Hospital Name' },
      { field: 'roomNumber', header: 'Room Number' },
      { field: 'startSejour', header: 'Start Date' },
      { field: 'endSejour', header: 'End Date' }
    ];
  }

}
