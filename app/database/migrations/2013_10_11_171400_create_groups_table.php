<?php

use Illuminate\Database\Migrations\Migration;

class CreateGroupsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('groups', function($table) 
		{
			$table->increments('id');
			$table->string('name', 70);
		});

		Schema::create('groups_users', function($table) 
		{
			$table->integer('groupId')->unsigned();
			$table->integer('userId')->unsigned();
			$table->enum('role', array('admin', 'user'));
			$table->primary(array('groupId', 'userId'));
			$table->index('role');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('groups');
		Schema::drop('groups_users');
	}

}