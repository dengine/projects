<?php

class PostsController extends Controller
{
	public function showPosts()
	{
		$posts = Posts::all();
		
		return View::make('posts/posts_lists', array('posts'=> $posts));
	}
}