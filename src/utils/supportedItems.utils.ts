import { Item } from '@mirohq/websdk-types';

export type SupportedItemType = 'Sticky Note' | 'Text' | 'Shape' | 'Frame' | 'Card';

export interface SupportedItem {
  type: SupportedItemType;
  factoryMethod: (props: any | undefined) => Promise<any>;
  textPropName: string;
  miroType: string;
}

export const supportedElements: SupportedItem[] = [
  {
    type: 'Sticky Note',
    factoryMethod: props => miro.board.createStickyNote(props),
    textPropName: 'content',
    miroType: 'sticky_note',
  },
  {
    type: 'Text',
    factoryMethod: props => miro.board.createText(props),
    textPropName: 'content',
    miroType: 'text',
  },
  {
    type: 'Shape',
    factoryMethod: props => miro.board.createShape(props),
    textPropName: 'content',
    miroType: 'shape',
  },
  {
    type: 'Frame',
    factoryMethod: props => miro.board.createFrame(props),
    textPropName: 'title',
    miroType: 'frame',
  },
  {
    type: 'Card',
    factoryMethod: props => miro.board.createCard(props),
    textPropName: 'title',
    miroType: 'card',
  },
];

export const getTextFromItem = (element: Item) => {
  const supportedElement = supportedElements.find(supportedElement => supportedElement.miroType === element.type);

  if (!supportedElement) {
    return '';
  }

  return element[supportedElement.textPropName as keyof Item] || '';
};
