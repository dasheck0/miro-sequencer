import { StickyNote } from '@mirohq/websdk-types';

export const GeneralTab = () => {
  const clearText = async () => {
    const selectedWidgets = await miro.board.getSelection();
    const stickies: StickyNote[] = selectedWidgets.filter(widget => widget.type === 'sticky_note').map(widget => widget as StickyNote);

    await Promise.all(
      stickies.map(async sticky => {
        sticky.content = '';
        return await miro.board.sync(sticky);
      }),
    );

    miro.board.notifications.showInfo(`Cleared ${stickies.length} sticky notes`);
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
      <div className='grid'>
        <div className='cs1 ce7'>Clear selected Stickies</div>
        <div className='cs9 ce12'>
          <button className='button button-primary button-small' onClick={clearText} style={{ justifyContent: 'center' }}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
