import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss'],
})
export class PaginateComponent implements OnInit {
  @Output() setPaginate: EventEmitter<{ start: number; end: number }> =
    new EventEmitter();

  pages: number[] = [];
  perPage: number = 0;
  total: number = 0;
  numberPages: number = 0;
  currentPage: number = 1;

  constructor(private albumService: AlbumService) {
    this.perPage = 3;
  }

  ngOnInit(): void {
    this.init();
  }

  init(page: number = 1) {
    this.total = this.albumService.count();
    this.numberPages = Math.ceil(this.total / this.perPage);
    this.currentPage = page;
    this.pages = [];
    for (let i = 1; i < this.numberPages + 1; i++) {
      this.pages.push(i);
    }
  }
  selectedPage(page: number) {
    this.currentPage = page;
    this.setPaginate.emit(this.paginate(page));
  }
  previous() {
    if (this.currentPage === 1) {
      this.currentPage = this.numberPages;
    } else {
      this.currentPage--;
    }
    this.setPaginate.emit(this.paginate(this.currentPage));
  }
  next() {
    if (this.currentPage >= this.numberPages) {
      this.currentPage = 1;
    } else {
      this.currentPage++;
    }
    this.setPaginate.emit(this.paginate(this.currentPage));
  }

  paginate(page: number): { start: number; end: number } {
    const start = (page - 1) * this.perPage;
    const end = start + this.perPage;
    return { start: start, end: end };
  }
}
