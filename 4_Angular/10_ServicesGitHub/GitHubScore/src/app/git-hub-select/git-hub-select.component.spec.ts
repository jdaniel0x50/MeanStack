import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubSelectComponent } from './git-hub-select.component';

describe('GitHubSelectComponent', () => {
  let component: GitHubSelectComponent;
  let fixture: ComponentFixture<GitHubSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
