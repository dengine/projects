
<h2>Login page</h2>
<fieldset>
	<legend>Please login</legend>
	{{ Form::open(array('url' => 'login')) }}
	@if($errors->any())
	<div class="alert alert-error">
		<a href="#" data-dismiss="alert">&times;</a>
		{{ implode('', $errors->all('<li class="error">:message</li>' )) }}
	</div>
	@endif
	{{ Form::text('email', '', array('placeholder' => 'email')) }}
	{{ Form::password('pass') }}
</fieldset>