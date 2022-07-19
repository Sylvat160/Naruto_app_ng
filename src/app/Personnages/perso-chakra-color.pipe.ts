import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persoChakraColor'
})
export class PersoChakraColorPipe implements PipeTransform {



    transform(chakra: string): string {
  
      let color: string;
    
      switch (chakra) {
        case 'Katon':
          color = 'red lighten-1';
          break;
        case 'Raiton':
          color = 'blue lighten-1';
          break;
        case 'Yoton':
          color = 'green lighten-1';
          break;
        case 'Inton':
          color = 'brown lighten-1';
          break;
        case 'Mokuton':
          color = 'grey lighten-3';
          break;
        case 'Jinton':
          color = 'blue lighten-3';
          break;
        case 'Doton':
          color = 'deep-purple accent-1';
          break;
        case 'Suiton':
          color = 'pink lighten-4';
          break;
        case 'Futon':
          color = 'deep-purple darken-2';
          break;
        default:
          color = 'grey';
          break;
      }
    
      return 'chip ' + color;
    
    }
  }




