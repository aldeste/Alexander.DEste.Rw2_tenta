/* eslint no-unused-expressions: 0 */

import {expect} from 'chai';
import isLeapYear from './../source/script/sauce.js';

describe('A leap year', () => {
  it('is not very common', () => {
    expect(isLeapYear(2015)).to.be.false;
  });
});
