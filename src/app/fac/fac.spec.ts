import { fac } from './fac';

describe('fac test suite', () =>{
  it('Should return 0, if radio is 0', () =>{
    const result =fac(0);
    expect(result).toBe(0);
  })

  it('Should return 0 if n is negative', () =>{
    const result =fac(-1);
    expect(result).toBe(0);
  })

  it('Should return 6 if n is 3', () =>{
    const result =fac(3);
    expect(result).toBe(6);
  })

  it('Should return 24 if n is 4', () =>{
    const result =fac(4);
    expect(result).toBe(24);
  })

  it('Should return 0 if n>16', () =>{
    const result =fac(18);
    expect(result).toBe(0);
  })
})