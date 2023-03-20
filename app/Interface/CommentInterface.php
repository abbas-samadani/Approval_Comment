<?php
namespace App\Interface;

interface CommentInterface
{
    public function getComments(string $orderBy, string $search = null): array;

    public function updateApproval(int $id, bool $approved): object;
}
