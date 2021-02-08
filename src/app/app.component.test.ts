import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './nav/nav.component';
import { NotificationsDrawerService } from './notifications/components/notifications-drawer/notifications-drawer.service';
import { sessionStorageProvider, SessionStorageToken } from './shared/globals';
import { metaReducers, reducers } from './shared/state';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      declarations: [AppComponent, NavComponent],
      providers: [
        NotificationsDrawerService,
        { useFactory: sessionStorageProvider, provide: SessionStorageToken },
      ],
    }).compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // this is required: https://angular.io/guide/testing-components-scenarios#detectchanges
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'tigris'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    // this is required: https://angular.io/guide/testing-components-scenarios#detectchanges
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tigris');
  });
});
