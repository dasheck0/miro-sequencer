import { version } from '../../package.json';

export const Footer = () => {
  const showFeedback = true;
  const navigateToUrl = () => {
    window.open('https://github.com/dasheck0/miro-sequencer/issues', '_blank');
  };

  return (
    <div className='grid' style={{ width: '100%' }}>
      {showFeedback && (
        <div className='cs1 ce4'>
          <button className='button-icon button-icon-small icon-comment-feedback' type='button' onClick={navigateToUrl}></button>
        </div>
      )}
      <div className='cs8 ce12' style={{ textAlign: 'right', color: '#b2b2b2', fontSize: '0.8rem' }}>
        Version {version}
      </div>
    </div>
  );
};
