import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GlobalConstant } from '../contants/globalconstant';
import { map, Observable } from 'rxjs';
import { ApiResponse, IRole } from '../models/interface/api.response';

@Injectable({
  providedIn: 'root',
})
export class MasterService {

  http = inject(HttpClient)
  getAllRoles() : Observable<IRole[]>{
    return this.http.get<ApiResponse>(environment.API_URL+GlobalConstant.ALLROLES).pipe(
      map(roles => roles.data.filter((r:IRole) => r.roleName.toLowerCase() === 'farmer' || r.roleName.toLowerCase() === 'customer'))
    )
  }
}
