import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/shared/services/album.service';
import { Album } from '../../shared/classes/album';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.scss'],
})
export class AlbumDescriptionComponent implements OnInit {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.albumService.getAlbum(id).subscribe((album) => (this.album = album));
    }
  }
}
