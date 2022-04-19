import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience-and-education',
  templateUrl: './experience-and-education.component.html',
  styleUrls: ['./experience-and-education.component.css']
})
export class ExperienceAndEducationComponent implements OnInit {
  educationList:any;
  experienceList:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.educationList=data.education;
    })
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.experienceList=data.experience;
    })
  }

}
