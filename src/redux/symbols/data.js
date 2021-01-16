const symbols = [
  {
    id: 'popular',
    category: 'Popular',
    icons: [],
  },
  {
    id: 'arrows',
    category: 'Arrows',
    icons: [
      {
        name: 'Leftwards Arrow',
        formats: {
          html: '&#8592;',
          entity: '&larr;',
          css: '\u2190',
          hex: 'U+2190',
          ascii: '8592',
        },
      },
      {
        name: 'Upwards Arrow',
        formats: {
          html: '&#8593;',
          entity: '&uarr;',
          css: '\u2191',
          hex: 'U+2191',
          ascii: '8593',
        },
      },
      {
        name: 'Rightwards Arrow',
        formats: {
          html: '&#8594;',
          entity: '&rarr;',
          css: '\u2192',
          hex: 'U+2192',
          ascii: '8594',
        },
      },
      {
        name: 'Left Right Arrow',
        formats: {
          html: '&#8596;',
          entity: '&harr;',
          css: '\u2194',
          hex: 'U+2194',
          ascii: '8596',
        },
      },
      {
        name: 'Up Down Arrow',
        formats: {
          html: '&#8597;',
          css: '\u2195',
          hex: 'U+2195',
          ascii: '8597',
        },
      },
    ],
  },
  {
    id: 'currency',
    category: 'Currency',
    icons: [
      {
        name: 'Euro-Currency Sign',
        keywords: [],
        formats: {
          html: '&#8352;',
          css: '\u20A0',
          hex: 'U+20A0',
          ascii: '8352',
        },
      },
      {
        name: 'Colon Sign',
        formats: {
          html: '&#8353',
          css: '\u20A1',
          hex: 'U+20A1',
          ascii: '8353',
        },
      },
      {
        name: 'Cruzeiro Sign',
        formats: {
          html: '&#8354',
          css: '\u20A2',
          hex: 'U+20A2',
          ascii: '8354',
        },
      },
      {
        name: 'French Franc Sign',
        formats: {
          html: '&#8355',
          css: '\u20A3',
          hex: 'U+20A3',
          ascii: '8355',
        },
      },
      {
        name: 'Lira Sign',
        formats: {
          html: '&#8356',
          css: '\u20A4',
          hex: 'U+20A4',
          ascii: '8356',
        },
      },
      {
        name: 'Mill Sign',
        formats: {
          html: '&#8357',
          css: '\u20A5',
          hex: 'U+20A5',
          ascii: '8357',
        },
      },
      {
        name: 'Naira Sign',
        formats: {
          html: '&#8358',
          css: '\u20A6',
          hex: 'U+20A6',
          ascii: '8358',
        },
      },
      {
        name: 'Peseta Sign',
        formats: {
          html: '&#8359',
          css: '\u20A7',
          hex: 'U+20A7',
          ascii: '8359',
        },
      },
      // {
      //   name: 'Rupee Sign',
      // },
      // {
      //   name: 'Won Sign',
      // },
      // {
      //   name: 'New Sheqel Sign',
      // },
      // {
      //   name: 'Dong Sign',
      // },
      // {
      //   name: 'Euro Sign',
      // },
      // {
      //   name: 'Kip Sign',
      // },
      // {
      //   name: 'Tugrik Sign',
      // },
      // {
      //   name: 'Drachma Sign',
      // },
      // {
      //   name: 'German Penny Symbol',
      // },
      // {
      //   name: 'Peso Sign',
      // },
      // {
      //   name: 'Guarani Sign',
      // },
      // {
      //   name: 'Austral Sign',
      // },
      // {
      //   name: 'Hryvnia Sign',
      // },
      // {
      //   name: 'Cedi Sign',
      // },
      // {
      //   name: 'Livre Tournois Sign',
      // },
      // {
      //   name: 'Spesmilo Sign',
      // },
      // {
      //   name: 'Tenge Sign',
      // },
      // {
      //   name: 'Indian Rupee Sign',
      // },
      // {
      //   name: 'Turkish Lira Sign',
      // },
      // {
      //   name: 'Nordic Mark Sign',
      // },
      // {
      //   name: 'Manat Sign',
      // },
      // {
      //   name: 'Ruble Sign',
      // },
      // {
      //   name: 'Lari Sign',
      // },
      // {
      //   name: 'Bitcoin Sign',
      // },
      // {
      //   name: 'Bengali Rupee Mark',
      // },
      // {
      //   name: 'Gujarati Rupee Sign',
      // },
      // {
      //   name: 'Tamil Rupee Sign',
      // },
      // {
      //   name: 'Thai Currency Symbol Baht',
      // },
      // {
      //   name: 'Khmer Currency Symbol Riel',
      // },
      // {
      //   name: 'Square Yuan',
      // },
      // {
      //   name: 'Yen Character',
      // },
      // {
      //   name: 'Yen/Yuan Character Variant One',
      // },
      // {
      //   name: 'Yen/Yuan Character Variant Two',
      // },
      // {
      //   name: 'Yuan Character, in Hong Kong and Taiwan',
      // },
      // {
      //   name: 'Yen/Yuan Character Variant Three',
      // },
      // {
      //   name: 'Won Character',
      // },
      // {
      //   name: 'Rial Sign',
      // },
      {
        name: 'Dollar Sign',
        keywords: ['money'],
        formats: {
          html: '&#36;',
          css: '\u0024',
          hex: 'U+0024',
          ascii: '0036',
        },
      },
      {
        name: 'Fullwidth Dollar Sign',
        keywords: ['money'],
        formats: {
          html: '&#36;',
          css: '\u0024',
          hex: 'U+0024',
          ascii: '0036',
        },
      },
      // {
      //   name: 'Fullwidth Cent Sign',
      // },
      // {
      //   name: 'Fullwidth Pound Sign',
      // },
      // {
      //   name: 'Fullwidth Yen Sign',
      // },
      // {
      //   name: 'Fullwidth Won Sign',
      // },
      // {
      //   name: 'Cent Sign',
      // },
    ],
  },
  {
    id: 'emoji',
    category: 'Emoji',
    icons: [],
  },
  {
    id: 'math',
    category: 'Math',
    icons: [
      {
        name: 'For All',
        keywords: [],
        formats: {
          html: '&#8704;',
          entity: '&forall;',
          css: '\u2200',
          hex: 'U+2200',
          ascii: '8704',
        },
      },
      {
        name: 'Complement',
        keywords: [],
        formats: {
          html: '&#8705;',
          css: '\u2201',
          hex: 'U+2201',
          ascii: '8705',
        },
      },
      {
        name: 'Partial Differential',
        keywords: [],
        formats: {
          html: '&#8706;',
          entity: '&part;',
          css: '\u2202',
          hex: 'U+2202',
          ascii: '8706',
        },
      },
      {
        name: 'There Exists',
        keywords: ['existential', 'quantifier'],
        formats: {
          html: '&#8707;',
          entity: '&exist;',
          css: '\u2203',
          hex: 'U+2203',
          ascii: '8707',
        },
      },
      {
        name: 'There Does Not Exists',
        keywords: [],
        formats: {
          html: '&#8708;',
          entity: '',
          css: '\u2204',
          hex: 'U+2204',
          ascii: '8708',
        },
      },
      {
        name: 'Empty Set',
        keywords: ['null', 'set', 'zero'],
        formats: {
          html: '&#8709;',
          entity: '&empty;',
          css: '\u2205',
          hex: 'U+2205',
          ascii: '8709',
        },
      },
      {
        name: 'Increment',
        keywords: [
          'laplace operator',
          'forward difference',
          'symmetric sifference',
          'delta',
          'triangle',
          'up pointing',
        ],
        formats: {
          html: '&#8710;',
          entity: '',
          css: '\u2206',
          hex: 'U+2206',
          ascii: '8710',
        },
      },
      {
        name: 'Nabla',
        keywords: [
          'backward difference',
          'gradient, del',
          'triangle',
          'down pointing',
        ],
        formats: {
          html: '&#8711;',
          entity: '&nabla;',
          css: '\u2207',
          hex: 'U+2207',
          ascii: '8711',
        },
      },
      {
        name: 'Element Of',
        keywords: [],
        formats: {
          html: '&#8712;',
          entity: '&isin;',
          css: '\u2208',
          hex: 'U+2208',
          ascii: '8712',
        },
      },
      {
        name: 'Not An Element Of',
        keywords: [],
        formats: {
          html: '&#8713;',
          entity: '&notin;',
          css: '\u2209',
          hex: 'U+2209',
          ascii: '8713',
        },
      },
      {
        name: 'Small Element Of',
        keywords: ['epsilon'],
        formats: {
          html: '&#8714;',
          entity: '',
          css: '\u220A',
          hex: 'U+220A',
          ascii: '8714',
        },
      },
      {
        name: 'Contains As Member',
        keywords: ['such that'],
        formats: {
          html: '&#8715;',
          entity: '&ni;',
          css: '\u220B',
          hex: 'U+220B',
          ascii: '8715',
        },
      },
      {
        name: 'Does Not Contain As Member',
        keywords: [],
        formats: {
          html: '&#8716;',
          entity: '',
          css: '\u220C',
          hex: 'U+220C',
          ascii: '8716',
        },
      },
      {
        name: 'Small Contain As Member',
        keywords: ['reversed epsilon'],
        formats: {
          html: '&#8717;',
          entity: '',
          css: '\u220D',
          hex: 'U+220D',
          ascii: '8717',
        },
      },
      {
        name: 'End Of Proof',
        keywords: ['q.e.d', 'bullet', 'square', 'vertical', 'rectangle'],
        formats: {
          html: '&#8718;',
          entity: '',
          css: '\u220E',
          hex: 'U+220E',
          ascii: '8718',
        },
      },
      {
        name: 'N-Ary Product',
        keywords: ['product sign', 'pi'],
        formats: {
          html: '&#8719;',
          entity: '&prod;',
          css: '\u220F',
          hex: 'U+220F',
          ascii: '8719',
        },
      },
      {
        name: 'N-Ary Coproduct',
        keywords: ['coproduct sign'],
        formats: {
          html: '&#8720;',
          entity: '',
          css: '\u2210',
          hex: 'U+2210',
          ascii: '8720',
        },
      },
      {
        name: 'N-Ary Summation',
        keywords: ['summation sign', 'sigma', 'double-struck'],
        formats: {
          html: '&#8721;',
          entity: '&sum;',
          css: '\u2211',
          hex: 'U+2211',
          ascii: '8721',
        },
      },
      {
        name: 'Minus Sign',
        keywords: ['hyphen', 'dash'],
        formats: {
          html: '&#8722;',
          entity: '&minus;',
          css: '\u2212',
          hex: 'U+2212',
          ascii: '8722',
        },
      },
      {
        name: 'Minus-Or-Plus Sign',
        keywords: ['plus', 'minus'],
        formats: {
          html: '&#8723;',
          entity: '',
          css: '\u2213',
          hex: 'U+2213',
          ascii: '8723',
        },
      },
      {
        name: 'Dot Plus',
        keywords: [],
        formats: {
          html: '&#8724;',
          entity: '',
          css: '\u2214',
          hex: 'U+2214',
          ascii: '8724',
        },
      },
      {
        name: 'Division Slash',
        keywords: ['solidus', 'fraction', 'mathematical rising diagonal'],
        formats: {
          html: '&#8725;',
          entity: '',
          css: '\u2215',
          hex: 'U+2215',
          ascii: '8725',
        },
      },
      {
        name: 'Set Minus',
        keywords: ['reverse solidus', 'mathematical falling diagonal'],
        formats: {
          html: '&#8726;',
          entity: '',
          css: '\u2216',
          hex: 'U+2216',
          ascii: '8726',
        },
      },
      {
        name: 'Asterisk Operator',
        keywords: ['star', 'multiplication'],
        formats: {
          html: '&#8727;',
          entity: '&lowast;',
          css: '\u2217',
          hex: 'U+2217',
          ascii: '8727',
        },
      },
      {
        name: 'Ring Operator',
        keywords: ['apl jot', 'composite function', 'degree sign', 'bullet'],
        formats: {
          html: '&#8728;',
          entity: '',
          css: '\u2218',
          hex: 'U+2218',
          ascii: '8728',
        },
      },
      {
        name: 'Bullet Operator',
        keywords: ['dot', 'one dot leader'],
        formats: {
          html: '&#8729;',
          entity: '',
          css: '\u2219',
          hex: 'U+2219',
          ascii: '8729',
        },
      },
      {
        name: 'Square Root',
        keywords: ['radical sign', 'check mark'],
        formats: {
          html: '&#8730;',
          entity: '',
          css: '\u221A',
          hex: 'U+221A',
          ascii: '8730',
        },
      },
      {
        name: 'Cube Root',
        keywords: ['check mark'],
        formats: {
          html: '&#8731;',
          entity: '',
          css: '\u221B',
          hex: 'U+221B',
          ascii: '8731',
        },
      },
      {
        name: 'Fourth Root',
        keywords: ['check mark'],
        formats: {
          html: '&#8732;',
          entity: '',
          css: '\u221C',
          hex: 'U+221C',
          ascii: '8732',
        },
      },
      {
        name: 'Proportional To',
        keywords: [],
        formats: {
          html: '&#8733;',
          entity: '&prop;',
          css: '\u221D',
          hex: 'U+221D',
          ascii: '8733',
        },
      },
      {
        name: 'Infinity',
        keywords: [],
        formats: {
          html: '&#8734;',
          entity: '&infin;',
          css: '\u221E',
          hex: 'U+221E',
          ascii: '8734',
        },
      },
      {
        name: 'Right Angle',
        keywords: [],
        formats: {
          html: '&#8735;',
          entity: '',
          css: '\u221F',
          hex: 'U+221F',
          ascii: '8735',
        },
      },
      {
        name: 'Angle',
        keywords: ['acute'],
        formats: {
          html: '&#8736;',
          entity: '&ang;',
          css: '\u2220',
          hex: 'U+2220',
          ascii: '8736',
        },
      },
      {
        name: 'Measured Angle',
        keywords: [],
        formats: {
          html: '&#8737;',
          entity: '',
          css: '\u2221',
          hex: 'U+2221',
          ascii: '8737',
        },
      },
      {
        name: 'Spherical Angle',
        keywords: ['angle', 'arc'],
        formats: {
          html: '&#8738;',
          entity: '',
          css: '\u2222',
          hex: 'U+2222',
          ascii: '8738',
        },
      },
      {
        name: 'Divides',
        keywords: ['such that', 'APL', 'stile', 'line', 'vertical'],
        formats: {
          html: '&#8739;',
          entity: '',
          css: '\u2223',
          hex: 'U+2223',
          ascii: '8739',
        },
      },
      {
        name: 'Does Not Divide',
        keywords: [],
        formats: {
          html: '&#8740;',
          entity: '',
          css: '\u2224',
          hex: 'U+2224',
          ascii: '8740',
        },
      },
      {
        name: 'Parallel To',
        keywords: ['latin letter lateral click', 'double vertical line'],
        formats: {
          html: '&#8741;',
          entity: '',
          css: '\u2225',
          hex: 'U+2225',
          ascii: '8741',
        },
      },
      {
        name: 'Not Parallel To',
        keywords: [],
        formats: {
          html: '&#8742;',
          entity: '',
          css: '\u2226',
          hex: 'U+2226',
          ascii: '8742',
        },
      },
      {
        name: 'Logical And',
        keywords: ['wedge', 'conjunction', 'n-ary logical and', 'up arrowhead'],
        formats: {
          html: '&#8743;',
          entity: '&and;',
          css: '\u2227',
          hex: 'U+2227',
          ascii: '8743',
        },
      },
      {
        name: 'Logical Or',
        keywords: ['vee', 'disjunction', 'n-ary logical or', 'down arrowhead'],
        formats: {
          html: '&#8744;',
          entity: '&or;',
          css: '\u2228',
          hex: 'U+2228',
          ascii: '8744',
        },
      },
      {
        name: 'Intersection',
        keywords: ['cap', 'hat', 'n-ary intersection'],
        formats: {
          html: '&#8745;',
          entity: '&cap;',
          css: '\u2229',
          hex: 'U+2229',
          ascii: '8745',
        },
      },
      {
        name: 'Union',
        keywords: ['cup', 'n-ary union'],
        formats: {
          html: '&#8746;',
          entity: '&cup;',
          css: '\u222A',
          hex: 'U+222A',
          ascii: '8746',
        },
      },
      {
        name: 'Integral',
        keywords: ['latin small letter esh'],
        formats: {
          html: '&#8747;',
          entity: '&int;',
          css: '\u222B',
          hex: 'U+222B',
          ascii: '8747',
        },
      },
      {
        name: 'Double Integral',
        keywords: [],
        formats: {
          html: '&#8748;',
          entity: '',
          css: '\u222C',
          hex: 'U+222C',
          ascii: '8748',
        },
      },
      {
        name: 'Triple Integral',
        keywords: [],
        formats: {
          html: '&#8749;',
          entity: '',
          css: '\u222D',
          hex: 'U+222D',
          ascii: '8749',
        },
      },
      {
        name: 'Contour Integral',
        keywords: [],
        formats: {
          html: '&#8750;',
          entity: '',
          css: '\u222E',
          hex: 'U+222E',
          ascii: '8750',
        },
      },
      {
        name: 'Surface Integral',
        keywords: [],
        formats: {
          html: '&#8751;',
          entity: '',
          css: '\u222F',
          hex: 'U+222F',
          ascii: '8751',
        },
      },
      {
        name: 'Volume Integral',
        keywords: [],
        formats: {
          html: '&#8752;',
          entity: '',
          css: '\u2230',
          hex: 'U+2230',
          ascii: '8752',
        },
      },
      {
        name: 'Clockwise Integral',
        keywords: [],
        formats: {
          html: '&#8753;',
          entity: '',
          css: '\u2231',
          hex: 'U+2231',
          ascii: '8753',
        },
      },
      {
        name: 'Clockwise Contour Integral',
        keywords: [],
        formats: {
          html: '&#8754;',
          entity: '',
          css: '\u2232',
          hex: 'U+2232',
          ascii: '8754',
        },
      },
      {
        name: 'Anticlockwise Contour Integral',
        keywords: [],
        formats: {
          html: '&#8755;',
          entity: '',
          css: '\u2233',
          hex: 'U+2233',
          ascii: '8755',
        },
      },
      {
        name: 'Therefore',
        keywords: ['three dots', '3'],
        formats: {
          html: '&#8756;',
          entity: '&there4;',
          css: '\u2234',
          hex: 'U+2234',
          ascii: '8756',
        },
      },
      {
        name: 'Because',
        keywords: ['three dots', '3'],
        formats: {
          html: '&#8757;',
          entity: '',
          css: '\u2235',
          hex: 'U+2235',
          ascii: '8757',
        },
      },
      {
        name: 'Ratio',
        keywords: ['colon', 'two dots', '2'],
        formats: {
          html: '&#8758;',
          entity: '',
          css: '\u2236',
          hex: 'U+2236',
          ascii: '8758',
        },
      },
      {
        name: 'Proportion',
        keywords: [],
        formats: {
          html: '&#8759;',
          entity: '',
          css: '\u2237',
          hex: 'U+2237',
          ascii: '8759',
        },
      },
      {
        name: 'Dot Minus',
        keywords: ['saturating subtraction'],
        formats: {
          html: '&#8760;',
          entity: '',
          css: '\u2238',
          hex: 'U+2238',
          ascii: '8760',
        },
      },
      {
        name: 'Excess',
        keywords: [],
        formats: {
          html: '&#8761;',
          entity: '',
          css: '\u2239',
          hex: 'U+2239',
          ascii: '8761',
        },
      },
      {
        name: 'Geometric Proportion',
        keywords: [],
        formats: {
          html: '&#8762;',
          entity: '',
          css: '\u223A',
          hex: 'U+223A',
          ascii: '8762',
        },
      },
      {
        name: 'Homothetic',
        keywords: [],
        formats: {
          html: '&#8763;',
          entity: '',
          css: '\u223B',
          hex: 'U+223B',
          ascii: '8763',
        },
      },
      {
        name: 'Tilde Operator',
        keywords: [
          'varies',
          'difference between',
          'similar to',
          'not',
          'cycle',
          'APL tilde',
        ],
        formats: {
          html: '&#8764;',
          entity: '&sim;',
          css: '\u223C',
          hex: 'U+223C',
          ascii: '8764',
        },
      },
      {
        name: 'Reversed Tilde',
        keywords: ['lazy S'],
        formats: {
          html: '&#8765;',
          entity: '',
          css: '\u223D',
          hex: 'U+223D',
          ascii: '8765',
        },
      },
      {
        name: 'Inverted Lazy S',
        keywords: ['most positive'],
        formats: {
          html: '&#8766;',
          entity: '',
          css: '\u223E',
          hex: 'U+223E',
          ascii: '8766',
        },
      },
      {
        name: 'Sine Wave',
        keywords: ['alternating current'],
        formats: {
          html: '&#8767;',
          entity: '',
          css: '\u223F',
          hex: 'U+223F',
          ascii: '8767',
        },
      },
      {
        name: 'Wreath Product',
        keywords: [],
        formats: {
          html: '&#8768;',
          entity: '',
          css: '\u2240',
          hex: 'U+2240',
          ascii: '8768',
        },
      },
      {
        name: 'Not Tilde',
        keywords: [],
        formats: {
          html: '&#8769;',
          entity: '',
          css: '\u2241',
          hex: 'U+2241',
          ascii: '8769',
        },
      },
      {
        name: 'Minus Tilde',
        keywords: [],
        formats: {
          html: '&#8770;',
          entity: '',
          css: '\u2242',
          hex: 'U+2242',
          ascii: '8770',
        },
      },
      {
        name: 'Asymptotically Equal To',
        keywords: [],
        formats: {
          html: '&#8771;',
          entity: '',
          css: '\u2243',
          hex: 'U+2243',
          ascii: '8771',
        },
      },
      {
        name: 'Not Asymptotically Equal To',
        keywords: [],
        formats: {
          html: '&#8772;',
          entity: '',
          css: '\u2244',
          hex: 'U+2244',
          ascii: '8772',
        },
      },
      {
        name: 'Approximately Equal To',
        keywords: [],
        formats: {
          html: '&#8773;',
          entity: '',
          css: '\u2245',
          hex: 'U+2245',
          ascii: '8773',
        },
      },
      {
        name: 'Approximately But Not Actually Equal To',
        keywords: [],
        formats: {
          html: '&#8774;',
          entity: '',
          css: '\u2246',
          hex: 'U+2246',
          ascii: '8774',
        },
      },
      {
        name: 'Neither Approximately Nor Actually Equal To',
        keywords: [],
        formats: {
          html: '&#8775;',
          entity: '',
          css: '\u2247',
          hex: 'U+2247',
          ascii: '8775',
        },
      },
      {
        name: 'Neither Approximately Nor Actually Equal To',
        keywords: [],
        formats: {
          html: '&#8775;',
          entity: '',
          css: '\u2247',
          hex: 'U+2247',
          ascii: '8775',
        },
      },
    ],
  },
  {
    id: 'numbers',
    category: 'Numbers',
    icons: [],
  },
  {
    id: 'punctuation',
    category: 'Punctuation',
    icons: [
      {
        name: 'Exclamation Mark',
        keywords: ['point'],
        formats: { html: '&#33;', css: '\u0021', hex: 'U+0021', ascii: '0033' },
      },
      {
        name: 'Quotation Mark',
        keywords: [],
        formats: { html: '&#34;', css: '\u0022', hex: 'U+0022', ascii: '0034' },
      },
      {
        name: 'Number Sign',
        keywords: ['hash', 'pound'],
        formats: { html: '&#35;', css: '\u0023', hex: 'U+0023', ascii: '0035' },
      },
    ],
  },
];

export default symbols;
