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
      <div className='cs8 ce12' style={{ textAlign: 'right' }}>
        Version {version}
      </div>
    </div>
  );
};
