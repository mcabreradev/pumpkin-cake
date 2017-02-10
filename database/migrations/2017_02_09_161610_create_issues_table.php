<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('description')->nullable();
            $table->integer('project_id')->unsigned();
            $table->integer('milestone_id')->nullable()->unsigned();
            $table->integer('label_id')->nullable()->unsigned();
            $table->integer('priority_id')->nullable()->unsigned();
            $table->integer('type_id')->nullable()->unsigned();
            $table->integer('author')->unsigned();
            
            $table->foreign('project_id')
                ->references('id')
                ->on('projects');
           
            $table->foreign('milestone_id')
                ->references('id')
                ->on('milestones');
            
            $table->foreign('priority_id')
                ->references('id')
                ->on('priorities');
            
            $table->foreign('type_id')
                ->references('id')
                ->on('types');

            $table->foreign('author')
                ->references('id')
                ->on('users');

            // Fecha limite de la task 
            $table->datetime('due')->nullable();
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
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('issues');
        Schema::enableForeignKeyConstraints();
    }
}
