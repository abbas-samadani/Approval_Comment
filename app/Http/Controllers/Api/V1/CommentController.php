<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\CommentService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommentController extends Controller
{
    protected $commentService;

    public function __construct(CommentService $commentService)
    {
        $this->commentService = $commentService;
    }

    public function index(Request $request)
    {
        $orderBy = $request->input('orderBy', 'nameAsc');
        $search = $request->input('search');
        $comments = $this->commentService->getComments($orderBy, $search);
        return response()->json(['comments' => $comments , 'message' => 'success'], Response::HTTP_OK);
    }
}
