export const persistMiddleware =
  (blockList: string[] | null = []) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    const result = next(action);
    const state = store.getState();
    const statePersist = { ...state };
    blockList.forEach((key: string) => {
      delete statePersist[key];
    });
    localStorage.setItem("persist", JSON.stringify(statePersist));
    return result;
  };
