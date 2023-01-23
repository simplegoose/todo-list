export function saveToLocalStorage(data) {
  if (window.localStorage) {
    localStorage.setItem('todo_data', JSON.stringify(data));
  }
}

export function getFromLocalStorage() {
  if (window.localStorage) {
    try {
      const parsed = JSON.parse(localStorage.getItem('todo_data'));
      return parsed?.length ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  return [];
}
