<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index(){
        $products = Product::all();

        return response()->json([
            'status' => 'index success',
            'products' => $products
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()
            ]);
        } else {

            //CREATE
            Product::create($request->all());
            $products = Product::all();

            return response()->json(
                [
                    'status' => 'success',
                    'product' => $products
                ]
            );
        }
    }
}
