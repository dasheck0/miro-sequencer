import ReactDOM from 'react-dom';
import { LocalStorateStore } from '../store';

export const OnboardingModal = () => {
  const closeModal = () => {
    LocalStorateStore.getInstance().set('hasSeenOnboarding', true);
    miro.board.ui.closeModal();
  };

  return (
    <div className='grid h100' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <div className='cs1 ce12' style={{ alignSelf: 'flex-start' }}>
        <h1>Getting started</h1>
      </div>

      <div className='cs1 ce12' style={{ flex: 1, overflow: 'scroll' }}>
        <div className='cs1 ce12 mb-small'>
          This is a miro plugin that helps creating content based on rules, such as sequences. Currently there are two modes namely
          sequencer and split.
        </div>
        <div className='cs1 ce12 mb-small'>
          <ul className='ml-large'>
            <li className='mb-xxsmall'>
              <span style={{ color: '#4961f6' }}>Sequencer</span> allows you to generate certain Items (e.g. Sticky Note, Text) based on
              some rules. Supply a start value and specify an increment and how many items you want. The sequencer will create the amount of
              items specified by count with the content specified in formula, where $i is replaced with the current index
            </li>
            <li>
              <span style={{ color: '#4961f6' }}>Split</span> allows you to split the text of a given item (e.g. Sticky Note, Text) at a
              delimitter of your choice. You may also choose the type of the newly created items
            </li>
          </ul>
        </div>
        <div className='cs1 ce12 mb-small'>
          The plugin currently supports the following item types:
          <ul className='mb-small mt-xxsmall ml-large'>
            <li>Sticky Note</li>
            <li>Text</li>
            <li>Shape (Rectangle only)</li>
            <li>Frame (Sets the frame title)</li>
            <li>Card</li>
          </ul>
          This is due to the limitation of the Web SDK. We will add more item types, as soon as they are supported by the Miro Web SDK.
        </div>
      </div>

      <div className='cs1 ce12'>
        <button className='button button-primary' onClick={closeModal}>
          Got it
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<OnboardingModal />, document.getElementById('modal-root'));
