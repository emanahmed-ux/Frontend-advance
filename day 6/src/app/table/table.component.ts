import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  data = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];
  selectedItem: any = {};
  isEditing = false;

  addData() {
    this.data.push({
      id: this.data.length + 1,
      name: 'New Item',
      description: 'New Description',
    });
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

  deleteData(item:any) {
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}
