interface ItemPartial {
  id: string;
  width: number;
  x: number;
  y: number;
  height: number;
  sync: () => Promise<void>;
}

export const reformatItems = async (items: ItemPartial[]) => {
  if (items.length > 0) {
    const margin = items[0].width * 0.1;
    items.forEach(async (element, index) => {
      if (index === 0) {
        return;
      }

      const previousElement = items[index - 1];
      element.x = previousElement.x + previousElement.width + margin;
      element.y = previousElement.y;

      await element.sync();
    });
  }
};

export const selectItems = async (items: ItemPartial[]) => {
  await miro.board.select({ id: items.map(element => element.id) });
};