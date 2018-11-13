import { WorldViewerService } from 'sasi/views/world-viewer/world-viewer.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { SummaryPanelComponent } from 'sasi/views/world-viewer/search/summary-panel/summary-panel.component';
import { SearchPanelComponent } from 'sasi/views/world-viewer/search/search-panel/search-panel.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { worldSummaryData } from 'sasi/shared/mock/world-summary-mock';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  const worldViewerSpy = jasmine.createSpyObj('worldViewerservice', ['getWorldSummaryData']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        SearchComponent,
        SummaryPanelComponent,
        SearchPanelComponent
      ],
      providers: [
        { provide: WorldViewerService, useValue: worldViewerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    worldViewerSpy.getWorldSummaryData.and.returnValue(of(worldSummaryData));
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

  it('should initialize world data in init', () => {
    expect(worldViewerSpy.getWorldSummaryData).toHaveBeenCalled();
    expect(component.worldSummaryData).toEqual(worldSummaryData);
  });
});
