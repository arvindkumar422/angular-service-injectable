import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})
export class GroupService {
  group1_contents: string[];
  group2_contents: string[];

  constructor() {
    this.group1_contents = ['Dan', 'Rob'];
    this.group2_contents = ['Jon', 'Ned'];
  }

  getGroup1Contents() {
    return this.group1_contents;
  }

  getGroup2Contents() {
    return this.group2_contents;
  }

  addToGroup1(index: number) {
    this.group1_contents.push(this.group2_contents[index]);
    this.group2_contents.splice(index, 1); 
  }

  addToGroup2(index: number) {
    this.group2_contents.push(this.group1_contents[index]);
    this.group1_contents.splice(index, 1); 
  }

}