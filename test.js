import { equal } from 'assert';
import typographyBase from './index';

it('should typographyBase', () =>
  equal(typographyBase('unicorns'), 'unicorns'));

it('should typographyBase invalid input', () =>
  equal(typographyBase(), undefined));
