import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles = null;

  searchKey: string;

  ionViewDidEnter() {
    this.apiService.getNews().subscribe((data) => {
      // console.log(data);
      this.articles = data['articles'];
    })
  }

  searchNews(event: any) {
    this.articles = null;
    this.apiService.getNewsByQueryString(this.searchKey).subscribe((data) => {
      this.articles = data['articles'];
    })
  }

  constructor(private apiService: ApiService) {}
}
