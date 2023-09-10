// TODO: Change BuilderElement to HazeBuilderElement (was copied from old version)
export interface BuilderElement {
  id: string;
  selected?: boolean;
  name: string;
  icon: string;
  label: string;
  type: string | 'container' | 'element';
  tags: string[];
  subType?: string;
  config?: {
    [key: string]: any;
  };
}

export interface BuilderElementContainer extends BuilderElement {
  nestedElements: [];
}
