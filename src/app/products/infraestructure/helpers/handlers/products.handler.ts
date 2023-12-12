import { ActionProducts } from '../../../utils/actions-products.enum';
import { throwError } from 'rxjs';

export function handleError(error: Response, action: ActionProducts) {
  switch (action) {
    case ActionProducts.GET:
      switch (error.status) {
        case 400:
          return throwError(() => alert("Header 'authorId' is missing"));

        case 401:
          return throwError(() => alert('You must be owner'));

        default:
          return throwError(() => {});
      }
    case ActionProducts.POST:
      switch (error.status) {
        case 400:
          return throwError(() => alert("Header 'authorId' is missing"));

        case 401:
          return throwError(() => alert('You must be owner'));

        case 206:
          return throwError(() => alert(error.body));

        default:
          return throwError(() => {});
      }
    case ActionProducts.PUT:
      switch (error.status) {
        case 400:
          return throwError(() => alert("Header 'authorId' is missing"));

        case 206:
          return throwError(() => alert(error.body));

        case 401:
          return throwError(() => alert('You must be owner'));
        default:
          return throwError(() => {});
      }
    case ActionProducts.DELETE:
      switch (error.status) {
        case 400:
          alert('400');

          return throwError(() => alert("Header 'authorId' is missing"));

        case 401:
          alert('401');
          return throwError(() => alert('You must be owner'));

        case 404:
          alert('404');
          return throwError(() => alert('Not product found with that id'));

        default:
          return throwError(() => error);
      }

    case ActionProducts.VERIFICATION:
      switch (error.status) {
        case 401:
          return throwError(() => alert('You must be owner'));

        default:
          return throwError(() => {});
      }
  }
}
