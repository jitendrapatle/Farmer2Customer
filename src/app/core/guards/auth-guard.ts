import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const isLoggedIn = localStorage.getItem('Farmerdata') !== null;

  if(isLoggedIn){
    return true;
  }
  return false;
};
