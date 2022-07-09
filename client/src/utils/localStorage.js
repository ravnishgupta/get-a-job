
// From local storage get the list of saved books.
export const getSavedBookIds = () => {
    const savedBookIds = localStorage.getItem('saved_books')
      ? JSON.parse(localStorage.getItem('saved_books'))
      : [];
  
    return savedBookIds;
  };
  
  // Set list of saved books in local storage.
  export const saveBookIds = (bookIdArr) => {
    if (bookIdArr.length) {
      localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
    } else {
      localStorage.removeItem('saved_books');
    }
  };
  
  // Remove a book from storage.
  export const removeBookId = (bookId) => {
    const savedBookIds = localStorage.getItem('saved_books')
      ? JSON.parse(localStorage.getItem('saved_books'))
      : null;
  
    if (!savedBookIds) {
      return false;
    }
  
    const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));
  
    return true;
  };
  