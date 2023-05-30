import { Component, OnInit, Renderer2 } from '@angular/core';
import { HomeService } from '../../../../shell/src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  handler: any;
  constructor(private homeService : HomeService, private renderer: Renderer2) { }
  employeesData : any;
  details : any;
  projectsInfo : Array<any> = [
    {project_id: 1, project_name: 'Project1', project_desc: 'About Project1'},
    {project_id: 2, project_name: 'Project2', project_desc: 'About Project2'},
    {project_id: 3, project_name: 'Project3', project_desc: 'About Project3'},
    {project_id: 4, project_name: 'Project4', project_desc: 'About Project4'},
];

  ngOnInit() {
    this.employeesData = this.homeService.getEmployeesData();
    console.log("employeesData",this.employeesData);

    this.handler = this.renderer.listen(
      'window',
        'test',
       ({ detail }: CustomEvent) => {
              console.log('angular==> ', detail.data);
               this.details=detail.data;
               console.log('this.details==> ', this.details);
             }
      );
  }

}
