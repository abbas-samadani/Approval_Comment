<?php
namespace Tests\Unit;

use App\Models\Comment;
use App\Services\CommentService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentServiceTest extends TestCase
{
    // use RefreshDatabase;

    protected $commentService;

    public function setUp(): void
    {
        parent::setUp();
        $this->commentService = new CommentService();
    }

    public function testGetComments()
    {
        $comments = $this->commentService->getComments('nameAsc');
        $this->assertIsArray($comments);
        $this->assertArrayHasKey('name', $comments[0]);
        $this->assertArrayHasKey('approved', $comments[0]);
        // Test searching comments
        $comments = $this->commentService->getComments('nameAsc', 'John');
        $this->assertIsArray($comments);
    }

    public function testUpdateApproval()
    {
        $comment = Comment::inRandomOrder()->first();
        // Update the approval status
        $updatedComment = $this->commentService->updateApproval($comment->id, true);
        $this->assertTrue($updatedComment->approved);
    }
}
