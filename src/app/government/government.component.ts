import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.css']
})
export class GovernmentComponent implements OnInit {

  //stores currently active government branch. Only changed by the HTML
  public branchName: string = "";

  constructor() { }

  ngOnInit(): void {

  }


}
