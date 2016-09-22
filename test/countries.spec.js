/* eslint no-unused-expressions: 0 */

import {expect} from 'chai';
import countryGenerator from './../source/script/countries.js';

describe('A leap year', () => {
  it('is not very common', () => {
    expect(countryGenerator()).to.be.a('string');
  });
});
