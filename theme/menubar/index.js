export default {
  root: {
    class: [
      'relative',
      'background',
      'text-white',

      // Flexbox
      'flex',
      'items-center',

      // Spacing
      'p-2',

      // Shape
      'rounded-md',

      // Color
      'bg-surface-700',
      'border border-color ',
    ],
  },
  rootList: ({ props }) => ({
    class: [
      // Flexbox
      'sm:flex',
      'items-center',
      'flex-wrap',
      'flex-col sm:flex-row',
      {
        hidden: !(props != null && props.mobileActive),
        flex: props == null ? void 0 : props.mobileActive,
      },
      // Position
      'absolute sm:relative',
      'top-full left-0',
      'sm:top-auto sm:left-auto',
      // Size
      'w-full sm:w-auto',
      // Spacing
      'm-0',
      'py-1 sm:py-0 sm:p-0',
      'list-none',
      // Shape
      'shadow-md sm:shadow-none',
      'border-0',
      // Color
      'bg-surface-700 sm:bg-transparent',
      // Misc
      'outline-none',
    ],
  }),

  item: {
    class: 'sm:relative sm:w-auto w-full static',
  },
  itemContent: ({ props, context }) => ({
    class: [
      // Shape
      { 'rounded-md': props.root },

      //  Colors
      {
        'text-surface-50 text-white/70': !context.focused && !context.active,
        'text-surface-50 text-white/70 bg-surface-500/20': context.focused && !context.active,
        'bg-surface-500/20':
          (context.focused && context.active)
          || context.active
          || (!context.focused && context.active),
      },

      // Hover States
      {
        'hover:bg-surface-100/10': !context.active,
      },

      // Transitions
      'transition-all',
      'duration-200',
    ],
  }),
  itemLink: ({ context }) => ({
    class: [
      'relative',

      // Flexbox
      'flex',
      'items-center',

      // Spacing
      'py-3',
      'px-5',

      // Size
      {
        'pl-9 sm:pl-5': context.level === 1,
        'pl-14 sm:pl-5': context.level === 2,
      },
      'leading-none',

      // Misc
      'select-none',
      'cursor-pointer',
      'no-underline ',
      'overflow-hidden',
    ],
  }),
  itemIcon: {
    class: 'mr-2',
  },
  submenuIcon: ({ props }) => ({
    class: [
      {
        'ml-auto sm:ml-2': props.root,
        'ml-auto': !props.root,
      },
    ],
  }),
  submenu: ({ props }) => ({
    class: [
      'flex flex-col',
      // Size
      'w-full sm:w-48',

      // Spacing
      'py-1',
      'm-0',
      'list-none',

      // Shape
      'shadow-none sm:shadow-md',
      'rounded-md',

      // Position
      'static sm:absolute',
      'z-10',
      { 'sm:absolute sm:left-full sm:top-0': props.level > 1 },

      // Color
      'bg-surface-700',
      'shadlow-xl',
    ],
  }),
  separator: {
    class: 'border-t border-color border-surface-100 my-2',
  },
  button: {
    class: [
      // Flexbox
      'flex md:hidden',
      'items-center justify-center',

      // Size
      'w-8',
      'h-8',

      // Shape
      'rounded-full',
      // Color
      'text-surface-50 text-white/80',

      // States
      'hover:text-surface-600 hover:text-white/60',
      'hover:bg-surface-600/80',
      'focus:outline-none focus:outline-offset-0',
      'focus:ring focus:ring-primary-300/50',

      // Transitions
      'transition duration-200 ease-in-out',

      // Misc
      'cursor-pointer',
      'no-underline',
    ],
  },
  end: {
    class: 'ml-auto self-center',
  },
}
