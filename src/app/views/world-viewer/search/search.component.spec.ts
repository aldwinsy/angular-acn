import { ParadiseSummaryMock } from 'sasi/shared/mock/paradise-summary.mock';
import { PurgatorySummaryMock } from 'sasi/shared/mock/purgatory-summary.mock';
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
import { CoreService } from 'sasi/core/service/core.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  const coreServiceSpy = jasmine.createSpyObj('coreService', ['getPurgatorySummary', 'getParadiseSummary']);
  const worldViewerSpy = jasmine.createSpyObj('worldViewerService', ['getWorldObjects']);
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
        { provide: WorldViewerService, useValue: worldViewerSpy },
        { provide: CoreService, useValue: coreServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    coreServiceSpy.getPurgatorySummary.and.returnValue(of(PurgatorySummaryMock));
    coreServiceSpy.getParadiseSummary.and.returnValue(of(ParadiseSummaryMock));
    spyOn(component, 'transformWorldSummary').and.callThrough();
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
    expect(coreServiceSpy.getPurgatorySummary).toHaveBeenCalled();
    expect(coreServiceSpy.getParadiseSummary).toHaveBeenCalled();
    expect(component.transformWorldSummary).toHaveBeenCalled();
    expect(component.worldSummaryData).toEqual(worldSummaryData);
  });
});
