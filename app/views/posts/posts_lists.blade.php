@extends('layouts.master')

@section('meta_description') Посты в блоге @stop

	@section('content')
	<div class="row">
		<div class="col-lg-3">
			@include('auth.login')
		</div>
		<div class="col-lg-9">
			<section>
				@if($posts)
					@foreach ($posts as $post)
					<article>
						<b>{{ $post->created_at }} </b>
						<h3>{{ $post->title }}</h3>
						<i>{{ $post->content }} </i>
					</article>
					@endforeach
				@elseif (!$posts)
					Нет постов
				@endif 
			</section>
			
		</div>
	</div>

	@show
@stop