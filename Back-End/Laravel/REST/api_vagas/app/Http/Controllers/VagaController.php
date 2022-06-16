<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vaga;
use Validator;
use App\Empresa;
use App\Requisito;
use Illuminate\Pagination\Paginator;

class VagaController extends Controller
{
    protected function validarVaga($request){
        $validator = Validator::make($request->all(),[
            "titulo" => 'required',
            "descricao" => 'required',
            "salario" => 'required|numeric|min:1',
            "qtdHoras" => 'required|numeric|min:1',
            "qtdVagas" => 'required|numeric|min:1',
            "status" => 'required|boolean',
            "empresa_id" => 'required|numeric',
            "requisitos" => 'required'
            ]);
        return $validator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $qtd = $request['qtd'];
            $page = $request['page'];

            Paginator::currentPageResolver(function () use ($page) {
                return $page;
            });

            $vagas = Vaga::with('requisitos')->paginate($qtd);
            
            $vagas = $vagas->appends(Request::capture()->except('page')); 

            return response()->json(['vagas'=>$vagas], 200);
        } catch (\Exception $e){
            return response()->json(['message'=>'Ocorreu um erro no servidor'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $validator = $this->validarVaga($request);
            if($validator->fails()){
                return response()->json(['message'=>'Erro', 
                    'errors' => $validator->errors()], 
                    400);
            }
            $data = $request->only(['titulo', 'descricao', 'salario', 'qtdHoras', 'qtdVagas', 'status', 'empresa_id']);
            $empresa = $data['empresa_id'];
            $requisitos = $request['requisitos'];
            if(!Empresa::find($empresa)){
                return response()->json(['message'=>'Empresa a ser relacionada não existe'], 404);                    
            }            
            $vaga = Vaga::create($data);
            if($vaga){
                $vaga->requisitos()->createMany($requisitos);                
                return response()->json(['data'=> $vaga], 201);
            }else{
                return response()->json(['message'=>'Erro ao criar a vaga'], 400);
            }
        } catch (\Exception $e){
            return response()->json(['message'=>'Ocorreu um erro no servidor'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            if($id < 0){
                return response()->json(['message'=>'ID menor que zero, por favor, informe um ID válido'], 400);
            }
            $vaga = Vaga::with('requisitos')->find($id);
            if($vaga){
                return response()->json(['data'=>$vaga], 200);
            }else{
                return response()->json(['message'=>'A vaga com id '.$id.' não existe'], 404);
            }
        } catch (\Exception $e){
            return response()->json(['message'=>'Ocorreu um erro no servidor'], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{        
            $validator = $this->validarVaga($request);
            if($validator->fails()){
                return response()->json(['message'=>'Erro', 
                    'errors' => $validator->errors()], 
                    400);
            }
            $data = $request->only(['titulo', 'descricao', 'salario', 'qtdHoras', 'qtdVagas', 'status', 'empresa_id']);
            $empresa = $data['empresa_id'];
            $requisitos = $request['requisitos'];
            if(!Empresa::find($empresa)){
                return response()->json(['message'=>'Empresa a ser relacionada não existe'], 404);                    
            }
            $vaga = Vaga::find($id);
            if($vaga){                
                $vaga->update($data);
                $requisitos_vaga = Requisito::where('vaga_id', $id)->pluck('id')->toArray();
                $id_requisitos = array_keys($requisitos); 
                $requisitos_removidos = array_diff($requisitos_vaga, $id_requisitos);
                foreach ($requisitos_removidos as $requisito_removidos) {
                    $req = Requisito::find($requisito_removidos);
                    $req->delete();
                }
                foreach($requisitos as $requisito){
                    if(isset($requisito['id'])){
                        $req = Requisito::find($requisito['id']);
                        $req->descricao = $requisito['descricao'];
                        $req->vaga()->associate($vaga);
                        $req->save();
                    }else{
                        $vaga->requisitos()->create($requisito);
                    }
                }
                return response()->json(['data'=> $vaga], 200);
            }else{
                return response()->json(['message'=>'A vaga com id '.$id.' não existe'], 404);
            }
        } catch (\Exception $e){
            return response()->json(['message'=>'Ocorreu um erro no servidor'], 500);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
            if($id <= 0){
                return response()->json(['message'=>'ID menor que zero, por favor, informe um ID válido'], 400);
            }
            $vaga = Vaga::find($id);
            if($vaga){
                $vaga->delete();
                return response()->json([], 204);
            }else{
                return response()->json(['message'=>'A vaga com id '.$id.' não existe'], 404);
            }
        
    }
}
