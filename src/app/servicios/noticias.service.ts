import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaEncabezados } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpclient: HttpClient) { }

  getTopHeadLines(){
    return (this.httpclient.get<RespuestaEncabezados>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc7d9914898440dbbd18848dcadd6851'));

  }
}
