import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from './components/Footer';
import { GeneralTab } from './components/GeneralTab';
import { SequencerTab } from './components/SequencerTab';
import { SplitTab } from './components/SplitTab';
import { Tabs } from './components/Tabs';
import { LocalStorateStore } from './store';

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
    {
      title: 'General',
      content: <GeneralTab />,
    },
  ];

  React.useEffect(() => {
    const hasSeenIntro = LocalStorateStore.getInstance().get('hasSeenOnboarding');

    if (!hasSeenIntro) {
      miro.board.ui.openModal({ url: `${import.meta.env.VITE_BASE_URL}/onboarding.html`, width: 600, height: 600 });
    }
  }, []);

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
