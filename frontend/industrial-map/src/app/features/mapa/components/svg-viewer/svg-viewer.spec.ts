import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgViewer } from './svg-viewer';

describe('SvgViewer', () => {
  let component: SvgViewer;
  let fixture: ComponentFixture<SvgViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
