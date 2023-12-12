export class mockRouter {
  navigate = (): Promise<boolean> => {
    return Promise.resolve(true);
  };
}