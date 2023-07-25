import { SelectionUpdateEvent } from '@mirohq/websdk-types';
import React, { FC, useEffect } from 'react';
import { reformatItems, selectItems } from '../utils/handleItems.utils';
import { getTextFromItem, supportedElements } from '../utils/supportedItems.utils';
import { Info } from './Info';

export const SplitTab: FC = () => {
  const [delimiter, setDelimiter] = React.useState(',');
  const [currentElementTypeIndex, setCurrentElementTypeIndex] = React.useState(0);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  useEffect(() => {
    miro.board.ui.on('selection:update', (event: SelectionUpdateEvent) => {
      setButtonDisabled(event.items.length !== 1);
    });

    return () => {
      miro.board.ui.off('selection:update', () => {});
    };
  });

  const split = async () => {
    const selectedElement = await miro.board.getSelection();

    if (selectedElement.length > 0) {
      const text = getTextFromItem(selectedElement[0]) as string;
      const texts = text.split(delimiter);

      const factory = supportedElements[currentElementTypeIndex].factoryMethod;
      const textPropName = supportedElements[currentElementTypeIndex].textPropName;

      const elements = await Promise.all(texts.map(text => factory({ [textPropName]: text })));

      await reformatItems(elements);

      await miro.board.deselect({ id: selectedElement[0].id });
      await selectItems(elements);

      await miro.board.viewport.zoomTo(elements[0]);
      await miro.board.viewport.setZoom(1);

      await miro.board.notifications.showInfo(`Created ${elements.length} ${supportedElements[currentElementTypeIndex].type}s`);
    }
  };

  return (
    <div
      className='grid h100'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      <div className='cs1 ce12'>
        <Info message='Split your miro content into multiple elements by a separator. Select a single supported Element and click on split.' />
      </div>

      <div className='grid w100'>
        <div className='cs1 ce4'>Formula</div>
        <div className='cs5 ce12'>
          <input
            className='input input-small'
            type='text'
            placeholder='Your delimiter'
            value={delimiter}
            onChange={event => setDelimiter(event.target.value)}
          />
        </div>

        <div className='cs1 ce4'>Type</div>
        <div className='cs5 ce12'>
          <select
            className='select select-small'
            onChange={event => setCurrentElementTypeIndex(supportedElements.findIndex(item => item.type === event.target.value))}>
            {supportedElements.map((element, index) => (
              <option key={index} value={element.type} selected={currentElementTypeIndex === index}>
                {element.type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='cs1 ce12 mt-medium' style={{ alignSelf: 'flex-end' }}>
        <button className='button button-primary button-small' disabled={buttonDisabled || !delimiter} onClick={split}>
          Split
        </button>
      </div>
    </div>
  );
};
