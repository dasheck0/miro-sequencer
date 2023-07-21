import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from './components/Footer';
import { SequencerTab } from './components/SequencerTab';
import { SplitTab } from './components/SplitTab';
import { Tabs } from './components/Tabs';

const App: React.FC = () => {
  const tabs = [
    {
      title: 'Sequencer',
      content: <SequencerTab />,
    },
    {
      title: 'Split',
      content: <SplitTab />,
    },
  ];

  return (
    <div
      className='grid h100'
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <Tabs tabs={tabs} />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!!);
root.render(<App />);
