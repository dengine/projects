<?php

use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('posts', function($table) {
			$table->increments('post_id');
			$table->string('title', 255);
			$table->integer('author_id');
			$table->text('content');
			$table->timestamps();
		});

		Schema::create('posts_comments', function($table) {
			$table->increments('id');
			$table->integer('postId')->unsigned();
			$table->integer('authorId')->unsigned();
			$table->integer('parentId');
			$table->text('content');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('posts');
		Schema::dropIfExists('posts_comments');
	}

}