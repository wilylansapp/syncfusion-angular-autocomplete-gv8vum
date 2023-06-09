import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @ViewChild('objAutocomplete', { read: true, static: false })
  objAutocomplete: AutoCompleteComponent;
  @Input() public dataSource: any;
  @Input() public formGroupName: string;
  @Input() public fields: any;
  public rechercheFields: any[] = [{}];
  public searchForm: FormGroup;
  public form: FormArray;
  public compteur = 0;
  constructor(
    private rootFormGroup: FormGroupDirective,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log('hello');
    // Initialisation du formulaire à partir du formParent et formGroupName
    console.log(this.rootFormGroup);
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormArray;

    this.form.valueChanges.subscribe((data) =>
      console.log('data in child', data)
    );
    // Ajout premier Item du formulaire
    this.addItemSearch();
  }

  /**
   *
   * Ajoute un item de recherche
   *
   * @memberof SearchComponent
   */
  public addItemSearch(): void {
    this.compteur = this.compteur + 1;
    console.log(this.compteur);

    const control = this.fb.control('');

    this.form.push(control);
  }

  /**
   *
   * Supression d'un itam de recherche
   *
   * @param {number} i
   * @memberof SearchComponent
   */
  public deleteItemSearch(index: number): void {
    if (this.form.controls.length > 1) {
      this.form.removeAt(index);
    }
  }
  public getTime() {
    return new Date().getTime();
  }

  public change(e) {
    console.log(e);
  }
}
