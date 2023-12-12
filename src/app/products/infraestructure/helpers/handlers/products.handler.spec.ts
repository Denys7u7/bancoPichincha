import { ActionProducts } from 'src/app/products/utils/actions-products.enum';
import { handleError } from './products.handler';
import { take } from 'rxjs';

describe('testing handleError', () => {
  it('should be problems (400, POST)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_400 = { status: 400 } as Response;

    handleError(error_400, ActionProducts.POST)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (400, PUT)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_400 = { status: 400 } as Response;

    handleError(error_400, ActionProducts.PUT)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (400, DELETE)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_400 = { status: 400 } as Response;

    handleError(error_400, ActionProducts.DELETE)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (401, GET)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_401 = { status: 401 } as Response;

    handleError(error_401, ActionProducts.GET)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (401, POST)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_401 = { status: 401 } as Response;

    handleError(error_401, ActionProducts.POST)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (401, PUT)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_401 = { status: 401 } as Response;

    handleError(error_401, ActionProducts.PUT)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (401, DELETE)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_401 = { status: 401 } as Response;

    handleError(error_401, ActionProducts.DELETE)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (401, VERIFICATION)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_401 = { status: 401 } as Response;

    handleError(error_401, ActionProducts.VERIFICATION)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (206, POST)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_206 = { status: 206 } as Response;

    handleError(error_206, ActionProducts.POST)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (206, PUT)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_206 = { status: 206 } as Response;

    handleError(error_206, ActionProducts.PUT)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (404, DELETE)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_404 = { status: 404 } as Response;

    handleError(error_404, ActionProducts.DELETE)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });

  it('should be problems (400, GET)', (done: DoneFn) => {
    spyOn(window, 'alert');
    const error_400 = { status: 400 } as Response;

    handleError(error_400, ActionProducts.GET)
      .pipe(take(1))
      .subscribe({
        next: () => {},
        error: () => {
          expect(window.alert).toHaveBeenCalled();
          done();
        },
      });
  });
});
