import { opacity } from './utils'
/*
  Tokens:
  Define your scales first
*/

const tokens = {
  name: 'React UI Base Dark',
  space: {
    0: 0,
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px'
  },
  radii: [0, '2px', '4px', '50%'],
  fontSizes: {
    0: 0,
    1: '10px',
    2: '12px',
    3: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '48px',
    9: '64px',
    10: '72px'
  },
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fontFamilies: {
    brand: {
      name: 'Righteous'
    },
    primary: {
      name: 'Work Sans',
      weights: [300, 400, 500, 700, 900]
    }
    // primary: {
    //   name: '-apple-system',
    //   weights: [300, 400, 500, 700, 900]
    // }
    // -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    // Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  },
  lineHeights: {
    compact: '1.2',
    default: '1.6',
    cosy: '2'
  },
  breakpoints: {
    0: '576px',
    1: '768px',
    2: '992px'
  },

  durations: {
    0: 0,
    1: '75ms',
    2: '100ms',
    3: '150ms',
    4: '200ms',
    5: '300ms',
    6: '500ms',
    7: '1000ms',
    8: '2500ms'
  },

  // based on elevation levels
  shadows: {
    0: 'none',
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },

  colors: {
    purple: '#8147FF',
    lightPurple: '#F7F3FD',
    dusk: '#5B27A2',
    darkDusk: '#302546',
    blue: '#419BFF',
    aqua: '#00EEFF',
    midnight: '#08080C',
    lilac: '#EEF2F9',
    teal: '#359898',
    lightTeal: '#95DADA',
    whiteTeal: '#F7FBFC',
    red: '#F26D76',
    green: '#2CD1A7',
    yellow: '#FFC907',

    primary: '#8147FF'
  }
}

// recommended: use the same space grid for size
tokens.sizes = { ...tokens.space }

/*
  Decisions:
  You can create aliases in scales based on the scale.
*/

tokens.fontSizes.Heading = {
  page: 8, // reads from tokens.fontSizes.8
  section: 6,
  paragraph: 4
}

// we define these at the tokens level
// so that they can be used by other
// components as well
tokens.colors.text = {
  body: 'white',
  input: 'midnight',
  link: 'blue',
  subtle: 'rgba(100,100,100, 0.5)',
  error: 'red'
}

/*
  Component styles:
  You can define styles, sizes and variants here
*/

const components = {
  /** Global */
  Global: {
    body: {
      backgroundColor: '#242124'
    }
  },

  /** Atoms */

  Avatar: {
    sizes: { small: 6, medium: 8, large: 12 }
  },
  Button: {
    fontSize: 4,
    borderRadius: 2,
    paddingX: 3,
    outline: 'none',
    borderStyle: 'none',
    backgroundColor: 'white',
    height: '40px',
    fontFamily: tokens.fontFamilies.brand.name,
    variants: {
      primary: {
        backgroundColor: 'primary',
        color: 'white',
        boxShadow: 5
      },
      secondary: {
        color: 'black',
        border: 'solid 1px midnight',
        boxShadow: 3
      },
      danger: {
        color: 'red',
        border: 'solid 1px',
        borderColor: tokens.colors.red
      },
      link: {
        color: 'text.link',
        border: 'none',
        background: 'none'
      },
      'link-warn': {
        color: 'text.error',
        border: 'none',
        background: 'none'
      }
    }
  },
  Checkbox: {
    border: '1px solid'
  },
  Heading: {},
  Image: {},
  Input: {
    // recommended: match sizes of input and buttons so
    // that they go well together in forms next to other
    fontFamily: tokens.fontFamilies.primary.name,
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 2,
    paddingX: 2,
    boxShadow: tokens.shadows[2],
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0, 0.12)',
    color: 'text.input',
    '::placeholder': {
      color: 'text.subtle'
    },
    '&[aria-invalid]': {
      borderColor: 'red'
    }
  },
  Link: {
    variants: {
      default: {
        color: 'blue',
        ':hover': { color: 'darkblue' }
      },
      subtle: {
        color: 'grey', // match Text.variants.subtle
        ':hover': { color: 'darkblue' }
      }
    }
  },
  Select: {
    // recommended: match styles of input
    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'text.body',
    '&[aria-invalid]': {
      borderColor: 'red'
    }
  },
  Skeleton: {
    display: 'block',
    backgroundColor: 'lightgrey',
    highlightColor: 'white',
    height: 4,
    borderRadius: 2,
    animationDuration: 8
  },
  Spinner: {
    sizes: { small: 2, medium: 4, large: 6 },
    borderColor: 'white',
    borderLeftColor: 'black'
  },
  Switch: {
    colors: {
      backgroundOff: 'red',
      backgroundOn: 'green'
    }
  },
  SwitchContainer: {
    boxShadow: 2
  },
  SwitchToggle: {
    boxShadow: 2
  },
  Text: {
    fontWeight: tokens.fontWeights.normal,
    fontFamily: tokens.fontFamilies.primary.name,
    variants: {
      default: { color: 'text.body' },
      body: { color: 'text.body' },
      subtle: { color: 'text.subtle' },
      danger: { color: 'text.error' },
      link: { color: 'rgba(83, 51, 237, 1)' },
      light: { color: 'white' },
      title: {
        fontFamily: tokens.fontFamilies.brand.name,
        color: 'text.body'
      }
    }
  },
  Textarea: {
    fontFamily: tokens.fontFamilies.primary.name,

    sizes: { small: 6, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    paddingY: 2,
    backgroundColor: 'white',
    boxShadow: 2,

    borderColor: opacity(tokens.colors.midnight, 0.1),
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    '&[aria-invalid]': {
      borderColor: 'red'
    }
  },

  /** Molecules */

  Alert: {
    fontSize: 3,
    padding: 4,
    border: '1px solid',
    variants: {
      default: {
        backgroundColor: 'white',
        color: 'black',
        borderColor: 'black'
      },
      warning: {
        backgroundColor: 'yellow',
        color: 'black',
        borderColor: 'black'
      }
    }
  },
  Breadcrumb: {
    fontSize: 3
  },
  BreadcrumbSeparator: {
    display: 'inline-block',
    color: 'text.subtle',
    paddingX: 2
  },
  BreadcrumbItem: {
    display: 'inline-block',
    '&[aria-current]': {
      color: 'text.body'
    }
  },
  Card: {
    width: '100%',
    backgroundColor: 'primary',
    border: '1px solid',
    borderColor: opacity(tokens.colors.midnight, 0.1),
    padding: 3,
    borderRadius: 2,
    boxShadow: 2,
    overflow: 'hidden'
  },
  DialogContent: {
    backgroundColor: 'white',
    padding: 6
  },
  DialogOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  Form: {
    paddingY: 4
  },
  FormLabel: {
    color: 'text.body',
    fontSize: 4,
    marginBottom: 1,
    textTransform: 'uppercase',
    fontFamily: tokens.fontFamilies.primary.name

  },
  FormHeader: {
    color: 'text.body',
    fontSize: 5,
    fontWeight: 'medium',
    fontFamily: tokens.fontFamilies.primary.name

  },
  MenuList: {
    backgroundColor: 'white',
    color: 'text.body',
    fontSize: 3,
    borderRadius: 2,
    marginTop: 1,
    boxShadow: 2
  },
  MenuItem: {
    paddingY: 2,
    paddingX: 3,
    fontFamily: tokens.fontFamilies.primary.name,
    '&[data-selected]': {
      backgroundColor: 'blue',
      color: 'white'
    }
  },
  Paragraph: {},
  TabList: {
    borderColor: 'grey'
  },
  Tab: {
    outline: 'none',
    fontSize: 3,
    height: 8,
    marginRight: 6,
    ':hover': {
      color: 'text.link'
    },
    '&[data-selected]': {
      color: 'text.link'
    }
  },
  TabPanel: {
    fontSize: 3,
    paddingY: 4,
    outline: 'none'
  },
  Tooltip: {
    backgroundColor: 'black',
    color: 'white',
    paddingX: 1,
    paddingY: 1,
    fontSize: 2,
    lineHeight: 1
  }
}

const theme = { tokens, components }

export default theme
export { tokens, components }
