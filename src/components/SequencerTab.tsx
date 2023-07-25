import React from 'react';
import { reformatItems, selectItems } from '../utils/handleItems.utils';
import { supportedElements } from '../utils/supportedItems.utils';
import { Info } from './Info';

export const SequencerTab = () => {
  const [formula, setFormula] = React.useState('$i');
  const [startIndex, setStartIndex] = React.useState(0);
  const [increment, setIncrement] = React.useState(1);
  const [count, setCount] = React.useState(5);
  const [currentElementTypeIndex, setCurrentElementTypeIndex] = React.useState(0);

  const generate = async () => {
    const texts = Array.from({ length: count }, (_, index) => {
      const value = startIndex + index * increment;
      return formula.replace('$i', value.toString());
    });

    const factory = supportedElements[currentElementTypeIndex].factoryMethod;
    const textPropName = supportedElements[currentElementTypeIndex].textPropName;

    const elements = await Promise.all(texts.map(text => factory({ [textPropName]: text })));

    await reformatItems(elements);
    await selectItems(elements);

    // await miro.board.viewport.zoomTo(elements[0]);
    // await miro.board.viewport.setZoom(1);

    await miro.board.notifications.showInfo(`Created ${elements.length} ${supportedElements[currentElementTypeIndex].type}s`);
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
        <Info message='Configure the sequencer below and hit generate to create your items. The variable "$i" gets replaced by a running index.' />

        <div className='grid'>
          <div className='cs1 ce4'>Formula</div>
          <div className='cs5 ce12'>
            <input
              className='input input-small'
              type='text'
              placeholder='My Formula $i'
              value={formula}
              onChange={event => setFormula(event.target.value)}
            />
          </div>

          <div className='cs1 ce4'>Start value</div>
          <div className='cs5 ce12'>
            <input
              className='input input-small'
              type='number'
              placeholder='0'
              value={startIndex}
              onChange={event => setStartIndex(parseInt(event.target.value, 10))}
            />
          </div>

          <div className='cs1 ce4'>Increment</div>
          <div className='cs5 ce12'>
            <input
              className='input input-small'
              type='number'
              placeholder='1'
              value={increment}
              onChange={event => setIncrement(parseInt(event.target.value, 10))}
            />
          </div>

          <div className='cs1 ce4'>Count</div>
          <div className='cs5 ce12'>
            <input
              className='input input-small'
              type='number'
              placeholder='1'
              value={count}
              min={1}
              onChange={event => setCount(parseInt(event.target.value, 10))}
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
      </div>
      <div className='cs1 ce12 w100 mt-medium'>
        <button className='button button-primary button-small' onClick={generate} style={{ justifyContent: 'center' }}>
          Generate
        </button>
      </div>
    </div>
  );
};
