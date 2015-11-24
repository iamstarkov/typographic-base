import { equal } from 'assert';
import typographicBase from './index';

it('should typographicBase', () =>
  equal(typographicBase(`Hello -> "world"`, { locale: 'en-us' }), `Hello → “world”`));
