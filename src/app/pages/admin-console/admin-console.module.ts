import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
//import { FeaturesComponent } from './features/features.component';
import { OrgProfileComponent } from './org-profile/org-profile.component';
import { OrgUsersModule } from './org-users/org-users.module';
import { LabProfileComponent } from './lab-profile/lab-profile.component';
import { LabPreferencesComponent } from './lab-preferences/lab-preferences.component';
import { MpProfileComponent } from './mp-profile/mp-profile.component';
import { MpLocationsComponent } from './mp-locations/mp-locations.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



export const routes = [
    { path: '', redirectTo: 'features', pathMatch: 'full' },
    //{ path: 'features', component: FeaturesComponent, data: { breadcrumb: 'Features' } },
    //{ path: 'roles', component: RolesComponent, data: { breadcrumb: 'Roles' } },
    //{ path: 'viewrole/:id', component: ViewroleComponent, data: { breadcrumb: 'View Role' } },
    //{ path: 'editrole/:id', component: EditroleComponent, data: { breadcrumb: 'Update Role' } },
    //{
    //    //path: 'editrole/:id/:name/:o/:l/:mp/:e', component: EditroleComponent,
    //    //    data: { breadcrumb: 'Update Role' }
    //    path: 'editrole/:id', component: EditroleComponent, data: { breadcrumb: 'Update Role' }
    //},

    //{ path: 'org-profile', component: OrgProfileComponent, data: { breadcrumb: 'AHS Profiles' } },
    { path: 'org-users', loadChildren: 'app/pages/admin-console/org-users/org-users.module#OrgUsersModule', data: { breadcrumb: 'AHS Users' } },
    { path: 'lab-profile', component: LabProfileComponent, data: { breadcrumb: 'Lab Profiles' } },
    { path: 'lab-preferences', component: LabPreferencesComponent, data: { breadcrumb: 'Lab Preferences' } },
    { path: 'lab-users', loadChildren: 'app/pages/admin-console/lab-users/lab-users.module#LabUsersModule', data: { breadcrumb: 'Lab Users' } },
    { path: 'mp-profile', component: MpProfileComponent, data: { breadcrumb: 'Medical Practice Profiles' } },
    { path: 'mp-locations', component: MpLocationsComponent, data: { breadcrumb: 'Medical Practice Locations' } },
    { path: 'mp-users', loadChildren: 'app/pages/admin-console/mpusers/mpusers.module#MpusersModule', data: { breadcrumb: 'Medical Practice Users' } },
    { path: 'roles', loadChildren: 'app/pages/admin-console/roles/roles.module#RolesModule', data: { breadcrumb: 'Roles' } },
    { path: 'features', loadChildren: 'app/pages/admin-console/features/features.module#FeaturesModule', data: { breadcrumb: 'Features' } },
    { path: 'orgs', loadChildren: 'app/pages/admin-console/orgs/orgs.module#OrgsModule', data: { breadcrumb: 'Orgs' } },
];


@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      NgxDatatableModule,
      DirectivesModule,
      PipesModule,
      RouterModule.forChild(routes)
    ],
    declarations: [OrgProfileComponent, LabProfileComponent,
        LabPreferencesComponent, MpProfileComponent, MpLocationsComponent
    ]
})
export class AdminConsoleModule { }
