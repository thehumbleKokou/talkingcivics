import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  public democrats: any;
  public republicans: any;
  public libertarians: any;
  public greens: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://congressionalappchallenge2.herokuapp.com/getparty/' + 'Democratic Party').subscribe((response) => { this.democrats = response; })
    this.http.get('https://congressionalappchallenge2.herokuapp.com/getparty/' + 'Republican Party').subscribe((response) => { this.republicans = response; })
    this.http.get('https://congressionalappchallenge2.herokuapp.com/getparty/' + 'Libertarian Party').subscribe((response) => { this.libertarians = response; })
    this.http.get('https://congressionalappchallenge2.herokuapp.com/getparty/' + 'Green Party').subscribe((response) => { this.greens = response; })
  }

}
