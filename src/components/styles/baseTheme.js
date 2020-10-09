// COLORS
const black = '#131313';
const white = '#FFFFFF';
const offWhite = '#F3F3F3';
const darkBlue = '#232338';
const santorini = '#0B64EB';
//const coolBlue = '#4564E6';
//const optimisticBlue = '#6EC7EC';
const subtleGrey = '#54595C';
//const royalPurple = '#671FB0';
//const richPurple = '#33189C';
const greenSuccess = '#68D380';
const redDanger = '#F67171';
const warningYellow = '#F3E886';
const dangerBorderColor = '#E22929';
const successBorderColor = '#57E334';
const warningBorderColor = '#E9D738';

// TRANSITIONS
const linear = 'all .3s linear';
const linearSlow = 'all 0.5s linear';

// BORDER RADIUS
const formBorderRadius = '1.2rem';

// BUTTON DEFAULT VALUES
const btnWidth = '16.5rem';
const btnHeight = '5rem';
const btnBorderRadius = '1.2rem';
const btnBorderColorActive = '#004DBF';
const btnBorderColor = '#4788EA';
const btnBackground = `linear-gradient(190deg, #1A75FF 8.39%, rgba(145, 174, 218, 0) 115.53%), ${santorini}`;
const btnBoxShadowInitial = '0px 1px 5px rgba(0, 0, 0, .25)';
// BUTTON HOVER
const btnBoxShadowHover = `0px 3px 8px rgba(0, 0, 0, 0.45)`;
// BUTTON ACTIVE
const btnBackgroundActive = `linear-gradient(180deg, #2D79EC 0%, #2569D0 100%), ${santorini}`;
const btnBoxShadowActive = `inset 0px 4px 4px rgba(0, 0, 0, .25), inset 0px -2px 3px rgba(55, 55, 55, .5), inset 0px 2px 3px rgba(53,53,53,.5)`;

//INPUT FEILDS DEFAULT VALUES
const inputBackColor = '#F8F7F7';
const inputPlaceholderColor = '#C4C4C4';
const inputBoxShadow = 'inset 0px 2px 4px rgba(0, 0, 0, 0.05)';
const inputColor = subtleGrey;
const inputBorderFocused = `1px solid #CDCDCD`;
const inputBoxShadowFocused = 'inset 1px 2px 2px rgba(0, 0, 0, 0.1)';

const link = '#4CC9F0';

/************************************** BUTTON ******************************/
const ButtonStyles = {
  btnWidth,
  btnHeight,
  btnBackground,
  btnBorderColor,
  btnBoxShadowInitial,
  btnBorderRadius,
  btnBackgroundActive,
  btnBorderColorActive,
  btnBoxShadowActive,

  transitions: {
    linear: 'all 0.3s linear'
  },

  hover: {
    btnBoxShadowHover
  },

  active: {},

  types: {
    primary: {
      bg: santorini,
      border: `1px solid ${santorini}`,
      color: white
    },
    danger: {
      bg: redDanger,
      border: `1px solid ${dangerBorderColor}`,
      color: offWhite
    },
    success: {
      bg: greenSuccess,
      border: `1px solid ${successBorderColor}`,
      color: offWhite
    },
    warning: {
      bg: warningYellow,
      border: `1px solid ${warningBorderColor}`,
      color: offWhite
    }
  }
};

/************************************** INPUT FIELDS ******************************/
const inputStyles = {
  inputBackColor,
  inputBoxShadow,
  inputPlaceholderColor,
  inputColor,
  inputBorderFocused,
  inputBoxShadowFocused,

  transitions: {
    linear: 'all 0.3s linear'
  },

  hover: {},

  active: {}
};
/************************************** THEME ******************************/

export const baseTheme = {
  BUTTON: ButtonStyles,
  INPUT: inputStyles,
  ICON: {
    width: '3rem',
    height: '3rem'
  },

  base: {
    auto: 'auto',
    textDecoration: 'underline',
    none: 'none',
    fixed: 'fixed',
    abs: 'absolute'
  },

  BORDER_RADIUS: {
    formBorderRadius
  },

  SHADOWS: {
    formShadow: btnBoxShadowInitial
  },

  transitions: {
    linear,
    linearSlow
  },

  colors: {
    color: {
      primary: {
        black,
        white,
        santorini,
        offWhite
      },

      accent: {
        greenSuccess,
        redDanger
      }
    },

    bg: {
      darkBlue,
      white,
      offWhite
    },

    links: {
      activeHover: link
    }
  },

  typography: {
    fonts: {
      body: '"Roboto", sans-serif',
      heading: ''
    },

    FONTSIZE: {
      desktop: {
        '00': '4.8rem',
        0: '4rem',
        1: '3.2rem',
        2: '2.4rem',
        3: '2rem',
        4: '1.6rem'
      },
      mobile: {
        '00': '4rem',
        0: '3.2rem',
        1: '2.6rem',
        2: '2.2rem',
        3: '1.8rem',
        4: '1.6rem'
      }
    },

    LINE_HEIGHT: {
      desktop: '1.5',
      mobile: '1.2'
    },

    LETTER_SPACING: {
      px1: '1px',
      px2: '2px'
    },

    FONT_WEIGHT: {
      thin: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },

    PADDING: {
      oneRem: '1rem',
      twoRem: '2rem'
    },

    fontSize: {
      sizeXL: '6rem',
      h1: '4.8rem',
      h2: '4rem',
      h3: '3.2rem',
      h4: '2.4rem',
      h5: '2rem',
      h6: '1.6rem',
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      p: '1.8rem'
    },

    fontWeight: {
      thin: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },

    lineHeights: {
      desktop: '1.5',
      mobile: '1.2',
      normal: 'normal',
      none: '1',
      shorter: '1.25',
      short: '1.375',
      base: '1.5',
      tall: '1.625',
      taller: '2'
    },

    letterSpacings: {
      normal: '0',
      px: '0.1rem',
      wide: '0.2rem',
      wider: '0.4rem',
      widest: '0.6rem'
    }
  },

  spacing: {
    px: '1px',
    0: '0',
    1: '0.4rem',
    2: '0.8rem',
    base: '1rem 0',
    xs: '1rem',
    sm: '1.2rem',
    md: '1.6rem',
    5: '2rem',
    lg: '2.4rem',
    8: '3.2rem',
    10: '4.0rem',

    buttonHeight: {
      xs: '2.4rem',
      sm: '3.6rem',
      md: '4rem',
      lg: '4.8rem'
    },

    sizes: {
      width: {
        full: '100%',
        half: '50%',
        auto: 'auto',
        buttons: {
          buttonWidth: '16.5rem'
        }
      },

      height: {
        full: '100vh',
        auto: 'auto',
        buttons: {
          buttonHeight: '5rem'
        }
      },
      border: {
        button: {
          borderRadius: '1.2rem'
        }
      }
    }
  },

  breakpoints: ['48em', '76.8em', '99.2em', '128em']
};
