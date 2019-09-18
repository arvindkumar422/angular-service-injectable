import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group2_2',
  templateUrl: './group2_2.component.html',
  styleUrls: ['./group2_2.component.css'],
  providers: [ GroupService ]
})
export class Group2_2Component implements OnInit {

  contents: string[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.contents = this.groupService.getGroup2Contents();
  }

  addToGroup1(index: number) {
    this.groupService.addToGroup1(index);
  }

}