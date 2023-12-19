<?php
// database/migrations/{timestamp}_create_yoga_enrollments_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateYogaEnrollmentsTable extends Migration
{
    public function up()
    {
        Schema::create('yoga_enrollments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('age');
            $table->string('batch');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('yoga_enrollments');
    }
}
