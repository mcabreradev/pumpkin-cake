<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssuesLabelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues_labels', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('issue_id')->unsigned();
            $table->foreign('issue_id')
                ->references('id')
                ->on('issues');

            $table->integer('label_id')->unsigned();
            $table->foreign('label_id')
                ->references('id')
                ->on('labels');

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
        Schema::dropIfExists('issues_labels');
    }
}
