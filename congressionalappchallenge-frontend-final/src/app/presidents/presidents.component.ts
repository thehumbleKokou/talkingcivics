import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Governor } from '../templates';
import { waitForAsync } from '@angular/core/testing';
import { PresidentData } from '../templates';

@Component({
  selector: 'app-presidents',
  templateUrl: './presidents.component.html',
  styleUrls: ['./presidents.component.css']
})


export class PresidentsComponent implements OnInit {

  //array of all presidents
  presidents = [
    {
      president: "George Washington",
      name: "George Washington",
      portraitLink: "./assets/presidents/washington.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "John Adams",
      name: "John Adams",
      portraitLink: "./assets/presidents/adams.jpg",
      party: "",
      startYear: 0,
      endYear: 0

    },
    {
      president: "Thomas Jefferson",
      name: "Thomas Jefferson",
      portraitLink: "./assets/presidents/jefferson.jpg",
      party: "",
      startYear: 0,
      endYear: 0

    },
    {
      president: "James Madison",
      name: "James Madison",
      portraitLink: "./assets/presidents/madison.jpg",
      party: "",
      startYear: 0,
      endYear: 0

    },
    {
      president: "James Monroe",
      name: "James Monroe",
      portraitLink: "./assets/presidents/monroe.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "John Quincy Adams",
      name: "John Quincy Adams",
      portraitLink: "./assets/presidents/q-adams.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Andrew Jackson",
      name: "Andrew Jackson",
      portraitLink: "./assets/presidents/jackson.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Martin Van Buren",
      name: "Martin Van Buren",
      portraitLink: "./assets/presidents/buren.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "William Henry Harrison",
      name: "William Henry Harrison",
      portraitLink: "./assets/presidents/h-harrison.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "John Tyler",
      name: "John Tyler",
      portraitLink: "./assets/presidents/tyler.png",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "James K. Polk",
      name: "James K. Polk",
      portraitLink: "./assets/presidents/polk.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Zachary Taylor",
      name: "Zachary Taylor",
      portraitLink: "./assets/presidents/taylor.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Millard Fillmore",
      name: "Millard Fillmore",
      portraitLink: "./assets/presidents/fillmore.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Franklin Pierce",
      name: "Franklin Pierce",
      portraitLink: "./assets/presidents/pierce.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "James Buchanan",
      name: "James Buchanan",
      portraitLink: "./assets/presidents/buchanan.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Abraham Lincoln",
      name: "Abraham Lincoln",
      portraitLink: "./assets/presidents/lincoln.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Andrew Johnson",
      name: "Andrew Johnson",
      portraitLink: "./assets/presidents/johnson.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Ulysses Grant",
      name: "Ulysses Grant",
      portraitLink: "./assets/presidents/grant.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Rutherford B. Hayes",
      name: "Rutherford B. Hayes",
      portraitLink: "./assets/presidents/hayes.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "James Garfield",
      name: "James Garfield",
      portraitLink: "./assets/presidents/garfield.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Chester Arthur",
      name: "Chester Arthur",
      portraitLink: "./assets/presidents/arthur.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Grover Cleveland",
      name: "Grover Cleveland",
      portraitLink: "./assets/presidents/cleveland.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Benjamin Harrison",
      name: "Benjamin Harrison",
      portraitLink: "./assets/presidents/harrison.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Grover Cleveland Pt2",
      name: "Grover Cleveland",
      portraitLink: "./assets/presidents/cleveland.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "William McKinley",
      name: "William McKinley",
      portraitLink: "./assets/presidents/mckinley.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Theodore Roosevelt",
      name: "Theodore Roosevelt",
      portraitLink: "./assets/presidents/teddy.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "William Howard Taft",
      name: "William Howard Taft",
      portraitLink: "./assets/presidents/taft.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Woodrow Wilson",
      name: "Woodrow Wilson",
      portraitLink: "./assets/presidents/wilson.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Warren G. Harding",
      name: "Warren G. Harding",
      portraitLink: "./assets/presidents/harding.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Calvin Coolidge",
      name: "Calvin Coolidge",
      portraitLink: "./assets/presidents/coolidge.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Herbert Hoover",
      name: "Herbert Hoover",
      portraitLink: "./assets/presidents/hoover.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Franklin D. Roosevelt",
      name: "Franklin D. Roosevelt",
      portraitLink: "./assets/presidents/fdr.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Harry Truman",
      name: "Harry Truman",
      portraitLink: "./assets/presidents/truman.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Dwight D. Eisenhower",
      name: "Dwight D. Eisenhower",
      portraitLink: "./assets/presidents/eisenhower.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "John F. Kennedy",
      name: "John F. Kennedy",
      portraitLink: "./assets/presidents/jfk.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Lyndon B. Johnson",
      name: "Lyndon B. Johnson",
      portraitLink: "./assets/presidents/lbj.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Richard Nixon",
      name: "Richard Nixon",
      portraitLink: "./assets/presidents/nixon.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Gerald Ford",
      name: "Gerald Ford",
      portraitLink: "./assets/presidents/ford.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Jimmy Carter",
      name: "Jimmy Carter",
      portraitLink: "./assets/presidents/carter.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Ronald Reagan",
      name: "Ronald Reagan",
      portraitLink: "./assets/presidents/reagan.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "George H.W. Bush",
      name: "George H.W. Bush",
      portraitLink: "./assets/presidents/hw-bush.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Bill Clinton",
      name: "Bill Clinton",
      portraitLink: "./assets/presidents/clinton.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "George W. Bush",
      name: "George W. Bush",
      portraitLink: "./assets/presidents/w-bush.jpeg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Barack Obama",
      name: "Barack Obama",
      portraitLink: "./assets/presidents/obama.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Donald Trump",
      name: "Donald Trump",
      portraitLink: "./assets/presidents/trump.jpg",
      party: "",
      startYear: 0,
      endYear: 0
    },
    {
      president: "Joe Biden",
      name: "Joe Biden",
      portraitLink: "./assets/presidents/biden.jpg",
      party: "Democrat",
      startYear: 2021,
      endYear: "present"
    }
  ]

  constructor(private http: HttpClient) {

  }

  currentPresidentData: any;


  ngOnInit(): void {
    for (let i = 0; i < this.presidents.length - 1; i++) {
      this.http.get<PresidentData>('https://congressionalappchallenge2.herokuapp.com/getpresident/' + this.presidents[i].president).subscribe((response) => { this.presidents[i].party = response.party; this.presidents[i].startYear = response.startOfTerm; this.presidents[i].endYear = response.endOfTerm; })
    }

  }
}
