import { Component, OnInit } from '@angular/core';

import { GroupService } from '../group.service';

@Component({
  selector: 'app-group1_2',
  templateUrl: './group1_2.component.html',
  styleUrls: ['./group1_2.component.css'],
  providers: [ GroupService ]
})
export class Group1_2Component implements OnInit {

  contents: string[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.contents = this.groupService.getGroup1Contents();
  }

  addToGroup2(index: number) {
    this.groupService.addToGroup2(index);
  }

}