import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';
import { AllModules, Module } from '@ag-grid-enterprise/all-modules';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;

  public modules: Module[] = AllModules;
  public columnDefs: ColDef[];
  public defaultColDef: ColDef;
  public rowData: any[] = [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 200,
      },
      { field: 'age' },
      {
        field: 'country',
        minWidth: 200,
      },
      { field: 'year' },
      {
        field: 'date',
        minWidth: 180,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],
      },
      {
        field: 'sport',
        minWidth: 200,
        menuTabs: ['filterMenuTab', 'columnsMenuTab'],
      },
      {
        field: 'gold',
        menuTabs: ['generalMenuTab', 'gibberishMenuTab'],
      },
      {
        field: 'silver',
        menuTabs: [],
      },
      { field: 'bronze' },
      { field: 'total' },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      filter: true,
    };
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => {
        this.rowData = data as any[];
      });
  }

  // getMainMenuItems(params: GetMainMenuItemsParams) {
  //   switch (params.column.getId()) {
  //     case 'athlete':
  //       var athleteMenuItems = params.defaultItems.slice(0);
  //       athleteMenuItems.push({
  //         name: 'ag-Grid Is Great',
  //         action: function () {
  //           console.log('ag-Grid is great was selected');
  //         },
  //       });
  //       athleteMenuItems.push({
  //         name: 'Casio Watch',
  //         action: function () {
  //           console.log('People who wear casio watches are cool');
  //         },
  //       });
  //       athleteMenuItems.push({
  //         name: 'Custom Sub Menu',
  //         subMenu: [
  //           {
  //             name: 'Black',
  //             action: function () {
  //               console.log('Black was pressed');
  //             },
  //           },
  //           {
  //             name: 'White',
  //             action: function () {
  //               console.log('White was pressed');
  //             },
  //           },
  //           {
  //             name: 'Grey',
  //             action: function () {
  //               console.log('Grey was pressed');
  //             },
  //           },
  //         ],
  //       });
  //       return athleteMenuItems;
  //     case 'age':
  //       return [
  //         {
  //           name: 'Joe Abercrombie',
  //           action: function () {
  //             console.log('He wrote a book');
  //           },
  //           icon:
  //             '<img src="https://www.ag-grid.com/examples-assets/lab.png" style="width: 14px;" />',
  //         },
  //         {
  //           name: 'Larsson',
  //           action: function () {
  //             console.log('He also wrote a book');
  //           },
  //           checked: true,
  //         },
  //         'resetColumns',
  //       ];
  //     case 'country':
  //       var countryMenuItems = [];
  //       var itemsToExclude = ['separator', 'pinSubMenu', 'valueAggSubMenu'];
  //       params.defaultItems.forEach(function (item) {
  //         if (itemsToExclude.indexOf(item) < 0) {
  //           countryMenuItems.push(item);
  //         }
  //       });
  //       return countryMenuItems;
  //     default:
  //       return params.defaultItems;
  //   }
  // }
}
