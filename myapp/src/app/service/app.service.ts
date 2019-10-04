import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getConfigurations(path: string, file: string) {
    return this.http.get('../../assets/configuration/' + path + '/' + file + '.json');
  }
}
