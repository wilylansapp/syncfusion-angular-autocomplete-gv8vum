/**
 * AutoComplete Default functionality Sample
 */
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
import { departements } from './app/departement';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public searchDepartement: AutoCompleteComponent;

  public dataSource = departements;

  public fields: object = { value: 'nom', groupBy: 'region' };
  dataform: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dataform = this.formBuilder.group({
      listSearch: this.formBuilder.array([]),
    });
    this.dataform.valueChanges.subscribe((value) => console.log(value));
  }

  /**
   *
   * Ajoute le style à la puce, se déclenche avant de définir l'élément sélectionné comme puce
   * dans le composant afin d'ajouter le style à la puce
   *
   * @param {TaggingEventArgs} e
   * @memberof SearchComponent
   */
  public setChipStyle(e: TaggingEventArgs): void {
    e.setClass('default');
  }

  /**
   *
   *
   *
   * @param {TaggingEventArgs} e
   * @memberof SearchComponent
   */
  public logSelectedItems() {
    const selectedItems = this.dataform.get('listSearch') as FormArray;
    console.log('Selected Items:', selectedItems.value);
  }
}
