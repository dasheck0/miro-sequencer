import React, { FC } from 'react';

interface TabsProps {
  tabs: {
    title: string;
    content: any;
  }[];
}

export const Tabs: FC<TabsProps> = (props: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  return (
    <>
      <div className='cs1 ce12 w100'>
        <div className='tabs'>
          <div className='tabs-header-list'>
            {props.tabs.map((tab, index) => (
              <div
                className={`tab ${currentTabIndex === index ? 'tab-active' : ''}`}
                key={index}
                tabIndex={index}
                onClick={() => setCurrentTabIndex(index)}>
                <div className='tab-text tab-badge'>{tab.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {props.tabs[currentTabIndex].content}
    </>
  );
};
