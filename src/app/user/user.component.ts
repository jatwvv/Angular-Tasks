import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // ' ! ' is set to tell typescript that we know its gonna be a value.
  // {required: true} is telling angular that this is must be set.
  //input here is a generic function.

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imgPath() {
    return 'users/' + this.user.avatar;
  }

  //signal approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imgPath = computed(() => {
  //   return 'users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
