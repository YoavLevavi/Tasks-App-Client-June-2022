import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCardsComponent } from './todos-cards.component';

describe('TodosCardsComponent', () => {
  let component: TodosCardsComponent;
  let fixture: ComponentFixture<TodosCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
