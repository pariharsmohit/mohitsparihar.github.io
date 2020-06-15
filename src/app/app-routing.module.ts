import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { PersonalProjectComponent } from './personal-project/personal-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'education', component: EducationComponent },
  // { path: 'personalProjects', component: PersonalProjectComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'experience', component: ExperienceComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
