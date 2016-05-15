import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {
  InputText, PanelMenu, Menu, PickList, Carousel, OrderList, Tree, LineChart, RadioButton,
  Password, SplitButton, SplitButtonItem, AutoComplete, Header, DataGrid, TabPanel, TabView, CodeHighlighter,
  InputTextarea, Button, Dropdown, Listbox, Dialog, Panel, DataTable, Column, Calendar, SelectItem
} from 'primeng/primeng'
import {TreeNodeTemplateLoader} from "primeng/components/tree/treenodetemplateloader";
import {UITreeNode} from "primeng/components/tree/uitreenode";
import {CountryService} from "./service/countryservice";

@Component({
  moduleId: module.id,
  selector: 'angular-cli-primeng-app',
  templateUrl: 'angular-cli-primeng.component.html',
  styleUrls: ['angular-cli-primeng.component.css'],
  directives: [PanelMenu, Menu, PickList, Carousel, OrderList, Tree, TreeNodeTemplateLoader,
    UITreeNode, LineChart, RadioButton, Password, SplitButton, SplitButtonItem, AutoComplete,
    Header, DataGrid, TabPanel, TabView, CodeHighlighter,
    InputText, InputTextarea, Button, Dropdown, Listbox, Dialog, Panel, DataTable, Column, Calendar, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, CountryService]
})
export class AngularCliPrimengAppComponent {
  title = 'Biitstrap Grid with PrimeNG';
  cities:SelectItem[];
  options:SelectItem[];
  display:boolean = false;
  filteredCountriesSingle: any[];

  constructor(private countryService: CountryService) {
    this.cities = [];
    this.cities.push({label: 'Select Cities', value: 'Select Cities'});
    this.cities.push({label: 'New York', value: 'New York'});
    this.cities.push({label: 'Rome', value: 'Rome'});
    this.cities.push({label: 'London', value: 'London'});
    this.cities.push({label: 'Istanbul', value: 'Istanbul'});
    this.cities.push({label: 'Paris', value: 'Paris'});


    this.options = [];
    this.options.push({label: 'Option 1', value: 'Option 1'});
    this.options.push({label: 'Option 2', value: 'Option 2'});
    this.options.push({label: 'Option 3', value: 'Option 3'});
    this.options.push({label: 'Option 4', value: 'Option 4'});
    this.options.push({label: 'Option 5', value: 'Option 5'});
  }

  showDialog() {
    this.display = true;
  }
  filterCountrySingle(event) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        });
    }

    filterCountry(query, countries: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }
}
