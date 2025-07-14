import { Component, ViewChild, ElementRef, Renderer2, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';

// Other selectors are available:
// https://next.ngrx.io/guide/router-store/selectors
export const {
    selectQueryParam,
    selectRouteParam,
    selectRouteDataParam, 
} = getRouterSelectors();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
private activatedRoute = inject(ActivatedRoute);
constructor(private store: Store) {
  // The store is injected to access the ngrx router state
  // This is not necessary for the activatedRoute examples
}
snapWay(){
 const testId = this.activatedRoute.snapshot.params['testId'];
const  permission = this.activatedRoute.snapshot.data['permission'];
const  user = this.activatedRoute.snapshot.queryParams['user'];
}

onsWay(){
const   testId$ = this.activatedRoute.params.pipe(map((p) => p['testId']));
const permission$ = this.activatedRoute.data.pipe(map((d) => d['permission']));
const user$ = this.activatedRoute.queryParams.pipe(map((q) => q['user']));
}

ngrxWay(){
 const  testId$ = this.store.select(selectRouteParam('testId'));
const permission$ = this.store.select(selectRouteDataParam('permission'));
const user$ = this.store.select(selectQueryParam('user'));
}
}
