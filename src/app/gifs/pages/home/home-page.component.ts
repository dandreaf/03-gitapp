import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  standalone: false
})
export class HomePageComponent {

  constructor( private gifsService: GifsService ) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  };

};
