<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', "HomeController@showWelcome");

Route::get('login', 'AuthController@getlogin');
Route::post('login', 'AuthController@postlogin');
Route::get('posts', 'PostsController@showPosts');

Route::get('queue', function() {
	Queue::push('PhotoService', array('message', 'Hello its queue!'));
});