<?php

namespace App\Services;

use App\Interface\CommentInterface;
use App\Models\Comment;
use App\Repositories\CommentRepository;

class CommentService implements CommentInterface
{

    public function getComments(string $orderBy, string $search = null): array
    {
        $query = Comment::query();

        if ($search) {
            $query->where('name', 'like', "%$search%");
        }

        switch ($orderBy) {
            case 'nameAsc':
                $query->orderBy('name', 'asc');
                break;
            case 'nameDesc':
                $query->orderBy('name', 'desc');
                break;
            case 'dateAsc':
                $query->orderBy('created_at', 'asc');
                break;
            case 'dateDesc':
                $query->orderBy('created_at', 'desc');
                break;
            default:
                $query->orderBy('name', 'asc');
        }

        return $query->get()->toArray();
    }

    public function updateApproval(int $id, bool $approved): object
    {
        $comment = Comment::findOrFail($id);
        $comment->approved = $approved;
        $comment->save();
        return $comment;
    }
}
