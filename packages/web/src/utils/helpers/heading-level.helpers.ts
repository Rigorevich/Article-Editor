type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

export const getHeadingTag = (level: HeadingLevels = 1) => {
  switch (level) {
    case 1:
      return 'h1';
    case 2:
      return 'h2';
    case 3:
      return 'h3';
    case 4:
      return 'h4';
    case 5:
      return 'h5';
    case 6:
      return 'h6';
    default:
      return 'h1';
  }
};
