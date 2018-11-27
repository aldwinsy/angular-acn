import { WorldViewerService } from 'sasi/views/world-viewer/world-viewer.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { SearchResultsComponent } from './search-results.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import {
  worldSummaryProperties,
  fleetResultsColumn,
  atcControlledStationResultsColumn,
  aircraftResultsColumn,
  airportResultsColumn,
  airportGroupResultsColumn,
  airportGroupRelationshipResultsColumn,
  crewResultsColumn,
  crewBaseResultsColumn,
  fleetCompatibilityResultsColumn,
  flightResultsColumn,
  flightActivityResultsColumn,
  interSegmentTimeResultsColumn,
  maintenanceResultsColumn,
  marketResultsColumn,
  nonFlyResultsColumn,
  offlineTransportationResultsColumn,
  pairingResultsColumn,
  passengerConnectionResultsColumn,
  positionResultsColumn,
  qualificationResultsColumn,
  subfleetResultsColumn,
  trainingResultsColumn
} from 'sasi/shared/variables/global-variables';
import { fleetMock } from 'sasi/shared/mock/world-objects-mock';


class ActivatedRouteMock {
  params = of({
    world: 'Purgatory',
    resultsToBeViewed: 'fleet'
  });
}

@Component({
  template: ''
})
class DummyComponent {
}

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  const worldServiceSpy = jasmine.createSpyObj('WorldViewerService', ['getWorldObjects']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([
          { path: 'world-viewer', component: DummyComponent }
         ])
      ],
      declarations: [ SearchResultsComponent, DummyComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: WorldViewerService, useValue: worldServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    worldServiceSpy.getWorldObjects.and.returnValue(of(fleetMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get search results on init', () => {
    expect(worldServiceSpy.getWorldObjects).toHaveBeenCalled();
    expect(component.resultsData).toBe(fleetMock);
  });

  it('should set world and results to be viewed on init', () => {
    expect(component.world).toBe('Purgatory');
    expect(component.object).toBe('fleet');
    const world = fixture.debugElement.query(By.css('#span-world')).nativeElement;
    const object = fixture.debugElement.query(By.css('#span-object')).nativeElement;
    expect(world.textContent).toContain('PURGATORY');
    expect(object.textContent).toContain('FLEET');
  });

  // @Note: This a way to test routerLink navigation
  it('should navigate to world view when "World View" label is clicked',
    async(inject([Router, Location], (router: Router, location: Location) => {
    const nav = fixture.debugElement.query(By.css('#span-nav')).nativeElement;
    nav.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/world-viewer');
    });
  })));

  it('should set results table columns depending on result object', () => {
    expect(component.getResultsColumn(worldSummaryProperties.aircraft)).toBe(aircraftResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.airport)).toBe(airportResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.airportGroup)).toBe(airportGroupResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.airportGroupRelationship)).toBe(airportGroupRelationshipResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.atcControlledStation)).toBe(atcControlledStationResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.crew)).toBe(crewResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.crewBase)).toBe(crewBaseResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.fleet)).toBe(fleetResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.fleetCompatibility)).toBe(fleetCompatibilityResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.flight)).toBe(flightResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.flightActivity)).toBe(flightActivityResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.interSegmentTime)).toBe(interSegmentTimeResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.maintenance)).toBe(maintenanceResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.market)).toBe(marketResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.nonFly)).toBe(nonFlyResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.offlineTransportation)).toBe(offlineTransportationResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.pairing)).toBe(pairingResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.passsengerConnection)).toBe(passengerConnectionResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.position)).toBe(positionResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.qualification)).toBe(qualificationResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.sublfeet)).toBe(subfleetResultsColumn);
    expect(component.getResultsColumn(worldSummaryProperties.training)).toBe(trainingResultsColumn);
  });
});
