import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

interface LooseObject {
  [key: string]: any;
}

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
})
export class IframeComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}
  url?: SafeResourceUrl;
  private dataSub?: Subscription;

  ngOnInit(): void {
    // TODO make the data typed
    const tigris = JSON.parse(sessionStorage.getItem('tigrisInfo') || '{}');

    // get the route data and params (i.e. values mapped by name in the url)
    this.dataSub = combineLatest([this.route.data, this.route.params])
      .pipe(
        map((results) => ({
          data: results[0],
          params: results[1],
        }))
      )
      .subscribe((results) => {
        let iframeUrl = results.data.src;

        // the idea is that if there is a "query" property on the data, each key in it
        // will have a value in the route params. The value associated with the key in the "query"
        // should be used as the query param name when build the query string for the iFrame url.
        // See action-items.module.ts for an example of where this used.
        if (results.data.query) {
          const queryObj: LooseObject = {};
          let appendQuery = false;
          Object.entries(results.data.query).forEach(
            ([paramsKey, queryParamName]) => {
              if (results.params[paramsKey] !== undefined) {
                queryObj[queryParamName as string] = results.params[paramsKey];
                appendQuery = true;
              }
            }
          );
          if (appendQuery) {
            const queryString = new HttpParams({
              fromObject: queryObj,
            }).toString();
            iframeUrl += '?' + queryString;
          }
        }

        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(iframeUrl);
      });
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }
}
