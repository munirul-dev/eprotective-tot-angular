import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial count of 0', () => {
    expect(component.count).toEqual(0);
  });

  it('should increment count', () => {
    component.increment();
    expect(component.count).toEqual(1);
  });

  it('should decrement count', () => {
    component.increment(); // makes it 1
    component.decrement();
    expect(component.count).toEqual(0);
  });

  it('should reset count', () => {
    component.count = 5;
    component.reset();
    expect(component.count).toEqual(0);
  });
});
