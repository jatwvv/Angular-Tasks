import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string;
  // ' ! ' is set to tell typescript that we know its gonna be a value.
  @Input() name!: string;
  get imgPath() {
    return 'users/' + this.avatar;
  }
  onSelectUser() {}
}
