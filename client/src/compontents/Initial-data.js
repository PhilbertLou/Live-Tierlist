const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Submit 106 Lab2' },
      'task-2': { id: 'task-2', content: 'Finish this week\'s 119' },
      'task-3': { id: 'task-3', content: 'Workout - Arms' },
      'task-4': { id: 'task-4', content: 'Work on Live Tierlist frontend' },
      'task-5': { id: 'task-1', content: 'Watch Hentai' },
      'task-6': { id: 'task-2', content: 'Reordering stuff' },
      'task-7': { id: 'task-3', content: 'Sleeping' },
      'task-8': { id: 'task-4', content: 'practice angular' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do list - 15/02/2021',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'To do list - 16/02/2021',
        taskIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2'],
  };
  
  export default initialData;
  