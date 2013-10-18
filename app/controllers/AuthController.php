<?php

class AuthController extends Controller
{
    public function getlogin()
    {
    	return View::make('auth.login');
    }
}