
# Comment Approval System

This project contains the implementation of `Comment Approval System`, a Laravel service used to handle comments in a web application. The service provides methods for retrieving and updating comments using an instance of the `Comment` model.

## Requirements

- PHP 8.x
- Laravel 9.x

## Installation

1. Clone the repository using `git clone <https://github.com/abbas-samadani/Approval_Comment>`
2. Install the required dependencies using Composer: `composer install`
3. Create a new MySQL database and update the .env file with your database credentials.
4. Migrate the database: `php artisan migrate`

## Usage

The `CommentService` provides the following methods:

### `getComments`

Retrieve comments from the database.

```php
public function getComments(string $orderBy, string $search = null): array;
```

- `$orderBy` (string, required): The field to order the comments by. Valid values are: `nameAsc`, `nameDesc`, `dateAsc`, `dateDesc`.
- `$search` (string, optional): A search string to filter the comments by.

Returns an array of comments ordered by the specified field.

### `updateApproval`

Update the approval status of a comment in the database.

```php
public function updateApproval(int $id, bool $approved): object;
```

- `$id` (int, required): The ID of the comment to update.
- `$approved` (bool, required): The new approval status of the comment.

Returns the updated comment as an object.

## API Endpoints

This project also provides two API endpoints for interacting with the `CommentService`:

### `GET /api/v1/comments`

Retrieve comments from the database.

- `orderBy` (string, optional): The field to order the comments by. Valid values are: `nameAsc`, `nameDesc`, `dateAsc`, `dateDesc`.
- `search` (string, optional): A search string to filter the comments by.

Returns a JSON object with an array of comments ordered by the specified field.

### `PUT /api/v1/comments/{id}`

Update the approval status of a comment in the database.

- `approved` (bool, required): The new approval status of the comment.

Returns a JSON object with the updated comment.

## Test

To test this project, you can use the following command:

`php artisan test`


## Front-End

A React front-end is included in this project for displaying and approving comments. The front-end code is located in the `front_end` directory. 

### Requirements

- Node.js 12.x or above

### Installation

1. Move to the `front_end` directory: `cd front_end`
2. Install the required dependencies using NPM or Yarn: `npm install` or `yarn install`

### Usage

The front-end can be started using the following command from within the `front_end` directory:

```bash
npm run dev
```

This command will start a development server at `http://localhost:5173`. You can access the front-end by opening a web browser and navigating to this URL.

## Built With

1. Laravel - The PHP framework used
2. React.js - The JavaScript library used
3. Tailwind CSS

## Authors

Abbas Samadani

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
