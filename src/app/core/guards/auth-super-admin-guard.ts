import { CanActivateFn } from '@angular/router';

export const authSuperAdminGuard: CanActivateFn = (route, state) => {
  debugger;
    const isLoggedIn = localStorage.getItem('Farmerdata') !== null;
    const isRoleSuperAdmin = isLoggedIn && JSON.parse(localStorage.getItem('Farmerdata')!).roleId === 3;
    // const isRoleSuperAdmin = isLoggedIn && JSON.parse(localStorage.getItem('Farmerdata')!).roleId === 1;
  return isRoleSuperAdmin;
};
