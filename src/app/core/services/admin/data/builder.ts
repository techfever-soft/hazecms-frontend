export const BASE_ELEMENTS = [
  {
    label: 'Title',
    type: 'element',
    name: 'headline',
    subTypes: ['h1', 'h2', 'h3', 'h4', 'h5'],
    icon: 'title',
    tags: ['text', 'heading'],
  },
  {
    label: 'Paragraph',
    type: 'element',
    name: 'paragraph',
    subTypes: ['p', 'caption'],
    icon: 'view_headline',
    tags: ['text', 'content'],
  },
  {
    label: 'Formatted text',
    type: 'element',
    name: 'text',
    icon: 'wysiwyg',
    tags: ['text', 'content'],
  },
  {
    label: 'List',
    type: 'element',
    name: 'list',
    subTypes: ['bulletedList', 'numberedList', 'matList', 'flexList'],
    icon: 'list',
    tags: ['content', 'structure'],
  },
  {
    label: 'Image',
    type: 'element',
    name: 'image',
    icon: 'image',
    tags: ['media', 'visual'],
  },
  {
    label: 'Map',
    type: 'element',
    name: 'map',
    icon: 'map',
    tags: ['media', 'interactive'],
  },
  {
    label: 'Button',
    type: 'element',
    name: 'button',
    subTypes: ['matRaisedButton', 'matButton', 'matMiniFab', 'matFab'],
    icon: 'switch',
    tags: ['action', 'interactive'],
  },
  {
    label: 'Link',
    type: 'element',
    name: 'link',
    icon: 'link',
    tags: ['action', 'interactive'],
  },
  {
    label: 'Icon',
    type: 'element',
    name: 'icon',
    subTypes: ['material', 'fontAwesome'],
    icon: 'emoji_objects',
    tags: ['visual', 'icon'],
  },
  {
    label: 'Video',
    type: 'element',
    name: 'video',
    icon: 'movie',
    tags: ['media', 'visual'],
  },
  {
    label: 'List',
    type: 'element',
    name: 'list',
    subTypes: ['bulletedList', 'numberedList', 'matList', 'flexList'],
    icon: 'list',
    tags: ['content', 'structure'],
  },
  {
    label: 'Separator',
    type: 'element',
    name: 'divider',
    icon: 'horizontal_rule',
    tags: ['content', 'structure'],
  },
  {
    label: 'Text field',
    type: 'element',
    name: 'textInput',
    icon: 'text_fields',
    tags: ['form', 'input'],
  },
  {
    label: 'Textarea',
    type: 'element',
    name: 'textarea',
    icon: 'subject',
    tags: ['form', 'input'],
  },
  {
    label: 'Color field',
    type: 'element',
    name: 'colorInput',
    icon: 'palette',
    tags: ['form', 'input', 'color'],
  },
  {
    label: 'File field',
    type: 'element',
    name: 'fileInput',
    icon: 'attach_file',
    tags: ['form', 'input', 'file'],
  },
  {
    label: 'Radio button',
    type: 'element',
    name: 'radioGroup',
    icon: 'radio_button_checked',
    tags: ['form', 'input'],
  },
  {
    label: 'Checkbox',
    type: 'element',
    name: 'checkbox',
    icon: 'check_box',
    tags: ['form', 'input'],
  },
  {
    label: 'Slider',
    type: 'element',
    name: 'sliderInput',
    icon: 'tune',
    tags: ['form', 'input'],
  },
  {
    label: 'Switch',
    type: 'element',
    name: 'toggle',
    icon: 'toggle_on',
    tags: ['form', 'input'],
  },
];

export const CONTAINER_ELEMENTS = [
  {
    label: 'Card',
    name: 'card',
    type: 'container',
    icon: 'cards',
    tags: ['layout', 'card'],
  },
  {
    label: 'Container',
    name: 'container',
    type: 'container',
    icon: 'fit_screen',
    tags: ['layout', 'container'],
  },
  {
    label: 'Grid',
    name: 'grid',
    type: 'container',
    icon: 'grid_on',
    tags: ['layout', 'grid'],
  },
  {
    label: 'Table',
    name: 'table',
    type: 'container',
    icon: 'table',
    tags: ['layout', 'table'],
  },
  {
    label: 'Form',
    name: 'form',
    type: 'container',
    icon: 'fact_check',
    tags: ['layout', 'form'],
  },
  {
    label: 'Sidenav',
    name: 'container',
    type: 'container',
    icon: 'side_navigation',
    tags: ['layout', 'sidenav'],
  },
  {
    label: 'Accordion',
    name: 'container',
    type: 'container',
    icon: 'view_day',
    tags: ['layout', 'accordion'],
  },
  {
    label: 'Modal',
    name: 'container',
    type: 'container',
    icon: 'dialogs',
    tags: ['layout', 'modal'],
  },
  {
    label: 'Tabs',
    name: 'container',
    type: 'container',
    icon: 'tabs',
    tags: ['layout', 'tabs'],
  },
  {
    label: 'Stepper',
    name: 'container',
    type: 'container',
    icon: 'steppers',
    tags: ['layout', 'stepper'],
  },

  {
    label: 'Carousel',
    name: 'container',
    type: 'container',
    icon: 'view_carousel',
    tags: ['layout', 'carousel'],
  },
];
