# zdz

## Default Theme

Basically we need to define our defaultTheme in `src/theme/theme.ts`:

You need to make sure to update the `Theme` Interface if you need to add new nodes.

```javascript
const theme: Theme = {
  breakpoints: createBreakpoints(),
  palette: {
    background: {
      paper: '#fff',
      default: '#212529'
    },
    primary: {
      main: '#00bde5',
      light: '#65f0ff',
      dark: '#008db3',
      contrastText: '#fff'
    },
    secondary: {
      main: '#121212',
      light: '#161616',
      dark: '#007bff',
      contrastText: '#fff'
    },
    info: {
      main: '#00bcd4',
      light: '#00aec5',
      dark: '#008fa1',
      contrastText: '#fff'
    },
    success: {
      main: '#4caf50',
      light: '#47a44b',
      dark: '#3d8b40',
      contrastText: '#fff'
    },
    warning: {
      main: '#ff9800',
      light: '#ffe608',
      dark: '#f08f00',
      contrastText: '#fff'
    },
    danger: {
      main: '#f44336',
      light: '#f33527',
      dark: '#ea1c0d',
      contrastText: '#fff'
    },
    light: {
      main: '#E5E9F2',
      light: '#E5E9F2',
      dark: '#E5E9F2',
      contrastText: '#fff'
    },
    dark: {
      main: '#22272A',
      light: '#22272A',
      dark: '#22272A',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)'
    }
  }
}
```

## Class Generator

The idea behind the class generator is to keep a very easy way to control our styles and make clear what is being styled.

We generate the class names based on the variant, size, and color.

So for:

`<Button>Hello World</Button>`

Will generate:

`<button class="Button btn btn-md btn-contained btn-primary css-678ace">Hello World</button>`

So the default size is `md`, the default variant is `contained` and the default color is `primary`.

So you can change the button color by passing the color prop:

`<Button color="dark">Hello World</Button>`

And will generate:

`<button class="Button btn btn-md btn-contained btn-dark css-678ace">Hello World</button>`

## Breaking styles into non-theming and theming styles

In the styles, I propose to break all the styles in two parts, the first part is for adding all the non-theming styles which means we need to add all the styles that does not require any dynamic value like color, sizes, etc. This is more like static css that is need it.

Example of non-theming styles:

```javascript
const ButtonSizesStyles = css`
  &.${COMPONENT_CLASS_NAME}-sm {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    border-radius: 3px;
  }

  &.${COMPONENT_CLASS_NAME}-md {
    padding: 0.4375rem 1.125rem;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    border-radius: 4px;
  }

  &.${COMPONENT_CLASS_NAME}-lg {
    padding: 0.6875rem 1.5rem;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    border-radius: 5px;
  }

  &.${COMPONENT_CLASS_NAME}-xl {
    padding: 0.625rem 2rem;
    font-size: 1.125rem;
    line-height: 2rem;
    border-radius: 5px;
  }
`
```

And then the other part is to define the theming styles, meaning adding colors, sizes or any value that can be changed via the theme:

```javascript
const ButtonVariantsStyles = (theme: Theme) => css`
  &.${COMPONENT_CLASS_NAME}-contained {
    &.${COMPONENT_CLASS_NAME}-primary {
      color: ${theme.palette.primary.contrastText};
      background-color: ${theme.palette.primary.main};
      border-color: ${theme.palette.primary.main};

      &:hover {
        background-color: ${theme.palette.primary.dark};
        border-color: ${theme.palette.primary.dark};
      }
    }

    &.${COMPONENT_CLASS_NAME}-secondary {
      color: ${theme.palette.secondary.contrastText};
      background-color: ${theme.palette.secondary.main};
      border-color: ${theme.palette.secondary.main};

      &:hover {
        background-color: ${theme.palette.secondary.dark};
        border-color: ${theme.palette.secondary.dark};
      }
    }

    &.${COMPONENT_CLASS_NAME}-info {
      color: ${theme.palette.info.contrastText};
      background-color: ${theme.palette.info.main};
      border-color: ${theme.palette.info.main};

      &:hover {
        background-color: ${theme.palette.info.dark};
        border-color: ${theme.palette.info.dark};
      }
    }

    &.${COMPONENT_CLASS_NAME}-success {
      color: ${theme.palette.success.contrastText};
      background-color: ${theme.palette.success.main};
      border-color: ${theme.palette.success.main};

      &:hover {
        background-color: ${theme.palette.success.dark};
        border-color: ${theme.palette.success.dark};
      }
    }

    &.${COMPONENT_CLASS_NAME}-warning {
      color: ${theme.palette.warning.contrastText};
      background-color: ${theme.palette.warning.main};
      border-color: ${theme.palette.warning.main};

      &:hover {
        background-color: ${theme.palette.warning.dark};
        border-color: ${theme.palette.warning.dark};
      }
    }

    &.${COMPONENT_CLASS_NAME}-danger {
      color: ${theme.palette.danger.contrastText};
      background-color: ${theme.palette.danger.main};
      border-color: ${theme.palette.danger.main};

      &:hover {
        background-color: ${theme.palette.danger.dark};
        border-color: ${theme.palette.danger.dark};
      }
    }

    &.${COMPONENT_CLASS_NAME}-ligh {
      color: ${theme.palette.light.contrastText};
      background-color: ${theme.palette.light.main};
      border-color: ${theme.palette.light.main};

      &:hover {
        background-color: ${theme.palette.light.dark};
        border-color: ${theme.palette.light.dark};
      }
    }

    &.${COMPONENT_CLASS_NAME}-dark {
      color: ${theme.palette.dark.contrastText};
      background-color: ${theme.palette.dark.main};
      border-color: ${theme.palette.dark.main};

      &:hover {
        background-color: ${theme.palette.dark.dark};
        border-color: ${theme.palette.dark.dark};
      }
    }
  }

  &.${COMPONENT_CLASS_NAME}-outlined {
    &.${COMPONENT_CLASS_NAME}-primary {
      color: ${theme.palette.primary.main};
      background-color: transparent;
      border-color: ${theme.palette.primary.main};

      &:hover {
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.primary.main};
        border-color: ${theme.palette.primary.main};
      }
    }

    &.${COMPONENT_CLASS_NAME}-secondary {
      color: ${theme.palette.secondary.main};
      background-color: transparent;
      border-color: ${theme.palette.secondary.main};

      &:hover {
        color: ${theme.palette.secondary.contrastText};
        background-color: ${theme.palette.secondary.main};
        border-color: ${theme.palette.secondary.main};
      }
    }

    &.${COMPONENT_CLASS_NAME}-info {
      color: ${theme.palette.info.main};
      background-color: transparent;
      border-color: ${theme.palette.info.main};

      &:hover {
        color: ${theme.palette.info.contrastText};
        background-color: ${theme.palette.info.main};
        border-color: ${theme.palette.info.main};
      }
    }

    &.${COMPONENT_CLASS_NAME}-success {
      color: ${theme.palette.success.main};
      background-color: transparent;
      border-color: ${theme.palette.success.main};

      &:hover {
        color: ${theme.palette.success.contrastText};
        background-color: ${theme.palette.success.main};
        border-color: ${theme.palette.success.main};
      }
    }

    &.${COMPONENT_CLASS_NAME}-warning {
      color: ${theme.palette.warning.main};
      background-color: transparent;
      border-color: ${theme.palette.warning.main};

      &:hover {
        color: ${theme.palette.warning.contrastText};
        background-color: ${theme.palette.warning.main};
        border-color: ${theme.palette.warning.main};
      }
    }

    &.${COMPONENT_CLASS_NAME}-danger {
      color: ${theme.palette.danger.main};
      background-color: transparent;
      border-color: ${theme.palette.danger.main};

      &:hover {
        color: ${theme.palette.danger.contrastText};
        background-color: ${theme.palette.danger.main};
        border-color: ${theme.palette.danger.main};
      }
    }

    &.${COMPONENT_CLASS_NAME}-light {
      color: ${theme.palette.light.main};
      background-color: transparent;
      border-color: ${theme.palette.light.main};

      &:hover {
        color: ${theme.palette.light.contrastText};
        background-color: ${theme.palette.light.main};
        border-color: ${theme.palette.light.main};
      }
    }

    &.${COMPONENT_CLASS_NAME}-dark {
      color: ${theme.palette.dark.main};
      background-color: transparent;
      border-color: ${theme.palette.dark.main};

      &:hover {
        color: ${theme.palette.dark.contrastText};
        background-color: ${theme.palette.dark.main};
        border-color: ${theme.palette.dark.main};
      }
    }
  }

  &.${COMPONENT_CLASS_NAME}-text {
    &.${COMPONENT_CLASS_NAME}-primary {
      color: ${theme.palette.primary.main};
      background-color: transparent;
      border-color: transparent;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    &.${COMPONENT_CLASS_NAME}-secondary {
      color: ${theme.palette.secondary.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    &.${COMPONENT_CLASS_NAME}-info {
      color: ${theme.palette.info.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    &.${COMPONENT_CLASS_NAME}-success {
      color: ${theme.palette.success.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    &.${COMPONENT_CLASS_NAME}-warning {
      color: ${theme.palette.warning.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    &.${COMPONENT_CLASS_NAME}-danger {
      color: ${theme.palette.danger.main};
      background-color: transparent;
      border-color: transparent;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    &.${COMPONENT_CLASS_NAME}-light {
      color: ${theme.palette.light.main};
      background-color: transparent;
      border-color: transparent;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    &.${COMPONENT_CLASS_NAME}-dark {
      color: ${theme.palette.dark.main};
      background-color: transparent;
      border-color: transparent;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`
```

Then in the base component we can inject the theme passed from `<ThemeProvider theme={theme}>...</ThemeProvider>` or adding the `defaultTheme` if the ThemeProvider is not present.

```javascript
export const ButtonBase = styled.button`
  &.${COMPONENT_CLASS_NAME} {
    user-select: none;
    border: 1px solid transparent;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  ${ButtonSizesStyles}

  ${({ theme }) =>
    Object.keys(theme).length > 0
      ? ButtonVariantsStyles(theme)
      : ButtonVariantsStyles(defaultTheme)}
`
```
