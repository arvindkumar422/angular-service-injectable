import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group2',
  templateUrl: './group2.component.html',
  styleUrls: ['./group2.component.css']
})
export class Group2Component implements OnInit {

  contents: string[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.contents = this.groupService.getGroup2Contents();
  }

  addToGroup1(index: number) {
    this.groupService.addToGroup1(index);
  }

}