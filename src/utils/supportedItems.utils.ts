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
    factoryMethod: miro.board.createStickyNote,
    textPropName: 'content',
    miroType: 'sticky_note',
  },
  {
    type: 'Text',
    factoryMethod: miro.board.createText,
    textPropName: 'content',
    miroType: 'text',
  },
  {
    type: 'Shape',
    factoryMethod: miro.board.createShape,
    textPropName: 'content',
    miroType: 'shape',
  },
  {
    type: 'Frame',
    factoryMethod: miro.board.createFrame,
    textPropName: 'title',
    miroType: 'frame',
  },
  {
    type: 'Card',
    factoryMethod: miro.board.createCard,
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
