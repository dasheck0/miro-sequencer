import { version } from '../../package.json';

export const Footer = () => {
  const showFeedback = false;

  return (
    <div className='grid' style={{ width: '100%' }}>
      {showFeedback && (
        <div className='cs1 ce4'>
          <a href='mailto:developers@nanogiants.de'>Feedback</a>
        </div>
      )}
      <div className='cs8 ce12' style={{ textAlign: 'right', color: '#b2b2b2', fontSize: '0.8rem' }}>
        Version {version}
      </div>
    </div>
  );
};
