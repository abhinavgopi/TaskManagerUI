import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from '../models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';
import {RequestMethod} from '@angular/http/src/enums';
import {RequestOptions} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url: string = 'http://localhost/TaskManager.Api//api/Task';
  urlById: string = 'http://localhost/TaskManager.Api/api/Task';
  urlAdd: string = 'http://localhost/TaskManager.Api/api/Task/AddTask';
  urlDelete: string = 'http://localhost/TaskManager.Api/api/Task/Delete';
  urlUpdate: string = 'http://localhost/TaskManager.Api/api/Task/UpdateTask';

  constructor(private _http: HttpClient) { }

  AddTask(item: Task): Observable<any> {
    var body = JSON.stringify(item);
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post(this.urlAdd, item, httpOptions);
  }

  UpdateTask(item: Task): Observable<any> {
    var body = JSON.stringify(item);
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put(this.urlUpdate, item, httpOptions);

  }

  GetAll() {
    return this._http.get(this.url);
  }

  GetByTaskId(taskId: number) {
    return this._http.get(this.urlById + "/" + taskId);
  }

  EndTask(taskId: number): Observable<any> {
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete(this.urlDelete + "/" + taskId, httpOptions);
  }
}