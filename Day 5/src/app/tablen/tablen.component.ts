import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tablen',
  templateUrl: './tablen.component.html',
  styleUrls: ['./tablen.component.css']
})
export class TablenComponent {
  data = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];
  selectedItem: any = {};
  isEditing = false;
  newItem: any = {};

  @ViewChild('f') dataForm!: NgForm;

  addData() {
    if (this.dataForm.valid) {
      this.data.push({
        id: this.data.length + 1,
        name: this.newItem.name,
        description: this.newItem.description,
      });
      this.newItem = {};
      this.dataForm.resetForm();
    }
  }

  editData(item: any) {
    this.selectedItem = { ...item };
    this.isEditing = true;
  }

  saveData() {
    const index = this.data.findIndex(
      (item) => item.id === this.selectedItem.id
    );
    if (index !== -1) {
      this.data[index] = { ...this.selectedItem };
      this.isEditing = false;
      this.selectedItem = {};
    }
  }

  deleteData(item: any) {
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }


}
