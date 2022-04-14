import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album } from 'src/app/album';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter();

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {}

  // onSubmit(form: NgForm): void {
  //   let results = this.albumService.search(form.value['word']);
  //   if (results.length > 0) this.searchAlbums.emit(results);
  // }
  onSubmit(form: NgForm) {
    this.albumService.search(form.value['word']).subscribe((albums) => {
      if (albums.length > 0) {
        this.searchAlbums.emit(albums);
      }
    });
  }
}
