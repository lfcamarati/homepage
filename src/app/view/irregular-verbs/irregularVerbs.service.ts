import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IrregularVerb } from './IrregularVerb.class';

interface IrregularVerbsData {
  verbs: string[][];
}

@Injectable({ providedIn: 'root' })
export class IrregularVerbsService {
  getVerbs(): Observable<IrregularVerb[]> {
    return this.http
      .get<IrregularVerbsData>('/assets/irregularVerbs.json')
      .pipe(
        map((value) =>
          value.verbs
            .map((v) => new IrregularVerb(v[0], v[1], v[2]))
            .sort(() => Math.random() - 0.5)
        )
      );
  }

  constructor(private http: HttpClient) {}
}
