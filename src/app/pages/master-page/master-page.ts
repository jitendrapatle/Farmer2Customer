import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-master-page',
  imports: [],
  templateUrl: './master-page.html',
  styleUrl: './master-page.scss',
})
export class MasterPage {

  isAddRoleActive = signal(false);
  isAddCategoryActive = signal(false);

  isAddCategory(){
    console.log("isAddCategoryActive before toggle: ", this.isAddCategoryActive());
    this.isAddCategoryActive.update((prev) => !prev);
    console.log("isAddCategoryActive after toggle: ", this.isAddCategoryActive());
  }
     

  isAddRole(){
    console.log("isAddRoleActive before toggle: ", this.isAddRoleActive());
    this.isAddRoleActive.update((prev) => !prev);
    console.log("isAddRoleActive after toggle: ", this.isAddRoleActive());
  }
}
