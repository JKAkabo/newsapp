import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '555d782e6ff84fd6aa6ed311385d3713';

  getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`);
  }

  getNewsByQueryString(queryString: string) {
    let queryWords: string[] = queryString.split(" ");
    while(queryWords.includes("")) {
      queryWords = queryWords.filter((value, index, arr) => {
        return value != "";
      });
    }
    queryString = queryWords.join("+")
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=${queryString}&apiKey=${this.API_KEY}`);
  }

  constructor(private httpClient: HttpClient) { }
}
