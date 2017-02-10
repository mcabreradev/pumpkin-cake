<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssuesRelatedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues_relateds', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('issue_1')->unsigned();
            $table->foreign('issue_1')
                ->references('id')
                ->on('issues');
            
            $table->integer('issue_2')->unsigned();
            $table->foreign('issue_2')
                ->references('id')
                ->on('issues');

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
        Schema::dropIfExists('issues_relateds');
    }
}
