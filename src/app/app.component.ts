import { Component, OnInit } from '@angular/core';

import { Patient } from './patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit 
{
  private patients: Patient[] = 
  [
    new Patient('https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/BlackMaskArkhamOrigins.jpg/220px-BlackMaskArkhamOrigins.jpg', 'Roman', 'Sionis', 'Black.Mask@arkhamasylum.org', 'Leland'),

    new Patient('https://upload.wikimedia.org/wikipedia/en/8/8d/A_prime_pic_of_Deadshot.png', 'Floyd', 'Lawton', 'Deadshot@arkhamasylum.org', 'Johnson'),

    new Patient('https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/03/Electrocutioner.png/revision/latest/scale-to-width-down/640?cb=20150615161325', 'Lester', 'Buchinsky', 'Electrocutioner@arkhamasylum.org', 'Sinner'),

    new Patient('https://upload.wikimedia.org/wikipedia/en/thumb/5/52/ModernHugoStrange.jpg/250px-ModernHugoStrange.jpg', 'Hugo', 'Strange', 'Hugo.Strange@arkhamasylum.org', 'Sinner'),

    new Patient('https://upload.wikimedia.org/wikipedia/en/a/a5/Harley_Quinn_and_Joker.png', 'Harleen Francis', 'Quinzel', 'Harley.Quinn@arkhamasylum.org', 'Quinzel'),

    new Patient('https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Killer_Croc.png/250px-Killer_Croc.png', 'Waylon', 'Jones', 'Killer.Croc@arkhamasylum.org', 'Leland'),

    new Patient('https://vignette.wikia.nocookie.net/batman/images/0/0d/Mr._Freeze_-_New_52.jpg/revision/latest?cb=20120523170930', 'Victor', 'Fries','Mr.Freeze@arkhamasylum.org', 'Sinner'),

    new Patient('https://upload.wikimedia.org/wikipedia/en/a/a4/BGK15.png', 'Pamela Lillian', 'Isley', 'Poison.Ivy@arkhamasylum.org', 'Leland'),

    new Patient('https://upload.wikimedia.org/wikipedia/en/1/1b/RiddlerGA.JPG', 'Edward','Nygma','Riddler@arkhamasylum.org', 'Sinner'),

    new Patient('https://upload.wikimedia.org/wikipedia/en/6/6d/Detective_Comics_818_2nd_print_coverart.jpg', 'Harvey','Dent','Two.Face@arkhamasylum.org', 'Leland')
  ];

  displayedPatients: Patient[];
  searchText: string;

  ngOnInit() 
  {
    this.displayedPatients = this.patients;
  }

  search() 
  {
    let searchTextArray = this.searchText ? this.searchText.split(' ') : [];

    if (searchTextArray.length === 2) 
    {
      if (searchTextArray[0].toLocaleLowerCase() === 'first') 
      {
        this.displayedPatients = this.patients.filter(patient => patient.firstName[0].toLocaleLowerCase() === searchTextArray[1][0].toLocaleLowerCase());
      } 

      else if (searchTextArray[0].toLocaleLowerCase() === 'last') 
      {
        this.displayedPatients = this.patients.filter(patient => patient.lastName[0].toLocaleLowerCase() === searchTextArray[1][0].toLocaleLowerCase());
      } 

      else if (searchTextArray[0].toLocaleLowerCase() === 'doctor') 
      {
        this.displayedPatients = this.patients.filter(patient => patient.doctorName[0].toLocaleLowerCase() === searchTextArray[1][0].toLocaleLowerCase());
      } 

      else if (searchTextArray[0].toLocaleLowerCase() === 'email') 
      {
        this.displayedPatients = this.patients.filter(patient => patient.emailAddress[0].toLocaleLowerCase() === searchTextArray[1][0].toLocaleLowerCase());
      } 

      else 
      {
        this.displayedPatients = [];
      }
    } 
    else 
    {
      this.displayedPatients = [];
    }
  }

  refresh() 
  {
    this.displayedPatients = this.patients;
  }
}
