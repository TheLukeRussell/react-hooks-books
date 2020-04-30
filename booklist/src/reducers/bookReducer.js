export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'add_book':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: action.book.length + 1,
        },
      ];
    case 'remove_book':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
