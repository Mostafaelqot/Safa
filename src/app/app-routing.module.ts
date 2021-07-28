import { ListItemComponent } from './shared/list-item/list-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './main/posts/posts.component';

const routes: Routes = [

  { path: '', component: PostsComponent },
  { path: 'list-item/:id', component: ListItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
