import { equal } from 'assert';
import typographicBase from './index';

it('should typographyBase', () =>
  equal(typographicBase(`Hello -> "world"`, { locale: 'en-us' }), `Hello → “world”`));
