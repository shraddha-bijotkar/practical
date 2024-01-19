import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: User[], args: string): User[] {
    return value.filter(user => {
      return user?.username?.toLocaleLowerCase().includes(args);
    });
  }

}
