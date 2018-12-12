import { TestBed } from '@angular/core/testing'

import { JoueurService } from './joueur.service'

describe('DataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: JoueurService = TestBed.get(JoueurService)
    expect(service).toBeTruthy()
  })
})
