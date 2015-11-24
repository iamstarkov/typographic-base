import { equal } from 'assert';
import typographyBase from './index';

it('should typographyBase', () =>
  equal(typographyBase(`Hello -> "world"`, { locale: 'en-us' }), `Hello → “world”`));
