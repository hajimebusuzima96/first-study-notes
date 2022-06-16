<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requisito extends Model
{
    protected $fillable = ["descricao"];

    public function vaga(){
        return $this->belongsTo('App\Vaga', 'vaga_id');
    }
}
