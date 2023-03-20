<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Services\CommentService;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    protected $commentService;

    public function __construct(CommentService $commentService) {
        $this->commentService = $commentService;
     }

     public function index(Request $request) {
        $comments = $this->commentService->comments($request->all());
        return response()->json($comments);
     }


    public function show($id)
    {
        $comment = Comment::findOrFail($id);
        return response()->json($comment);
    }

    public function approve(Request $request, $id)
    {
        $comment = Comment::find($id);
        if (!$comment) {
            return response()->json(['message' => 'Comment not found'], 404);
        }
        $comment->approved = !$comment->approved;
        $comment->save();
        return response()->json(['message' => 'Comment approved']);
    }
}
