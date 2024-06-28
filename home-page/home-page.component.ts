import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { JobRequest } from 'src/app/interface/job-request';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  other: string = '';
  phone: string = '';
  email: string = '';
  numD: string = '';
  numP: string = '';
  duration: string = '';
  zip: string = '';
  location: string = '';
  startDate: string = '';
  reason: string = '';
  lastName: string = '';
  firstName: string = '';

  jobRequestDB: string = 'JobRequests';

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  sendRequest() {

    if(this.email == ''){
      alert("Please enter your email");
      return;
    }
    
    const data: JobRequest = {
      reason: this.reason,
      zip: this.zip,
      firstName: this.firstName,
      lastName: this.lastName,
      location: this.location,
      date: this.startDate,
      duration: this.duration,
      phone: this.phone,
      email: this.email,
      quantity: 'Porta Potties:(' + this.numP + '), Dumpsters:(' + this.numD + ')',
      other: this.other,
      dateID: formatDate(new Date())
    }

    this.data.addToDatabase(data, this.jobRequestDB);

    this.other = '';
    this.phone = '';
    this.email = '';
    this.numD = '';
    this.numP = '';
    this.duration = '';
    this.zip = '';
    this.location = '';
    this.startDate = '';
    this.reason = '';
    this.lastName = '';
    this.firstName = '';

    alert("Job Request Sent!");
  }

}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}