import textr from 'textr';
import quotes from 'typographic-quotes';
import apostrophes from 'typographic-apostrophes';
import apostrophesForPlurals from 'typographic-apostrophes-for-possessive-plurals';
import arrows from 'typographic-arrows';
import copyright from 'typographic-copyright';
import currency from 'typographic-currency';
import ellipses from 'typographic-ellipses';
import emDashes from 'typographic-em-dashes';
import enDashes from 'typographic-en-dashes';
import mathSymbols from 'typographic-math-symbols';
import registeredTrademark from 'typographic-registered-trademark';
import singleSpaces from 'typographic-single-spaces';
import trademark from 'typographic-trademark';

const base = textr()
  .use(
    quotes,
    apostrophes,
    apostrophesForPlurals,
    arrows,
    copyright,
    currency,
    ellipses,
    emDashes,
    enDashes,
    mathSymbols,
    registeredTrademark,
    singleSpaces,
    trademark
  );

export default base;
