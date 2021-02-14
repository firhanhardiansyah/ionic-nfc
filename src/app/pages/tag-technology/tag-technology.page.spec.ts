import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagTechnologyPage } from './tag-technology.page';

describe('TagTechnologyPage', () => {
  let component: TagTechnologyPage;
  let fixture: ComponentFixture<TagTechnologyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagTechnologyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagTechnologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
