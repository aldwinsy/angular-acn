import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { SummaryPanelComponent } from 'sasi/views/world-viewer/search/summary-panel/summary-panel.component';
import { SearchPanelComponent } from 'sasi/views/world-viewer/search/search-panel/search-panel.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule
      ],
      declarations: [
        SearchComponent,
        SummaryPanelComponent,
        SearchPanelComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain summary panel', () => {
    const summaryPanel = fixture.debugElement.query(By.css('app-summary-panel'));
    expect(summaryPanel).toBeTruthy();
  });

  it('should contain search panel', () => {
    const searchPanel = fixture.debugElement.query(By.css('app-search-panel'));
    expect(searchPanel).toBeTruthy();
  });
});
