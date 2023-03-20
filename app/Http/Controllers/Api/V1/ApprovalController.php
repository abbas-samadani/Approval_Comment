<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\CommentService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use LDAP\Result;

class ApprovalController extends Controller
{
    protected $commentService;

    public function __construct(CommentService $commentService)
    {
        $this->commentService = $commentService;
    }

    public function update(Request $request, $id)
    {
        $approved = $request->input('approved');

        $comment = $this->commentService->updateApproval($id, $approved);

        return response()->json(['message' => 'Comment approval updated.' , 'data' => $comment] , Response::HTTP_OK);
    }
}
