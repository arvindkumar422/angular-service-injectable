import { Component, OnInit } from '@angular/core';

import { GroupService } from '../group.service';

@Component({
  selector: 'app-group1',
  templateUrl: './group1.component.html',
  styleUrls: ['./group1.component.css']
})
export class Group1Component implements OnInit {

  contents: string[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.contents = this.groupService.getGroup1Contents();
  }

  addToGroup2(index: number) {
    this.groupService.addToGroup2(index);
  }

}