import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClientModule } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { ContentListComponent } from './content-list.component';
import { ListComponent } from '../list/list.component';

import { MockRestService } from '../../services/mock-rest.service';
import { StorageService } from '../../services/storage.service';
import { FunctionsService } from "../../services/functions.service";
import { NavigationService } from "../../services/navigation.service";

import { Printer } from "../../interfaces/printer.interface";
import { By } from "@angular/platform-browser";

class StubMockRestService extends MockRestService {
  private printer1: Printer = {
    id: '1',
    name: 'First',
    status: 'Active',
    ip: '10.0.0.1',
    description: '',
    colour: 'Black',
    type: 'Laser'
  };

  getJSON(): Observable<any> {
    return Observable.of({printersList: this.printer1});
  }

  getLocalStorageItems(itemsTitle: string): any {
    return [this.printer1];
  }
}

describe('ContentListComponent', () => {

  let component: ContentListComponent;
  let fixture: ComponentFixture<ContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        ContentListComponent,
        ListComponent
      ],
      providers: [
        StorageService,
        FunctionsService,
        NavigationService,
        {
          provide: MockRestService,
          useClass: StubMockRestService
        },
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {data: {}}}
        },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy("navigate");
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display printer name', () => {
    const nameElement = fixture.debugElement.query(By.css('.data-name'));

    expect(nameElement.nativeElement.innerText).toEqual('First');
  });

  it('should display printer status', () => {
    const statusElement = fixture.debugElement.query(By.css('.data-status'));

    expect(statusElement.nativeElement.innerText).toEqual('Active');
  });
});
