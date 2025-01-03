import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: false
})
export class SidebarComponent {

  constructor( private gifsServices: GifsService ){  }

  get tags(): string[] {
    return this.gifsServices.tagHistory;
  };

  searchTag(tag: string): void {
    this.gifsServices.searchTag(tag);
  };

}
