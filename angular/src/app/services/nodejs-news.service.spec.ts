import { TestBed } from '@angular/core/testing';

import { NodejsNewsService } from './nodejs-news.service';

describe('NodejsNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodejsNewsService = TestBed.get(NodejsNewsService);
    expect(service).toBeTruthy();
  });
});
