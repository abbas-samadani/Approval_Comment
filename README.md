
# Comment Approval System

This project contains the implementation of `Comment Approval System`, a Laravel service used to handle comments in a web application. The service provides methods for retrieving and updating comments using an instance of the `Comment` model.

## Requirements

- PHP 8.x
- Laravel 9.x

## Installation

1. Clone the repository using `git clone <repository_url>`
2. Install the required dependencies using Composer: `composer install`
3. Migrate and seed the database: `php artisan migrate --seed`

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

## Front-End

A React front-end is included in this project for displaying and approving comments. The front-end code is located in the `resources/js/components` directory. 

### Requirements

- Node.js 12.x or above

### Installation

1. Move to the `resources/js/components` directory: `cd resources/js/components`
2. Install the required dependencies using NPM or Yarn: `npm install` or `yarn install`

### Usage

The front-end can be started using the following command from within the `resources/js/components` directory:

```bash
npm run dev
```

This command will start a development server at `http://localhost:3000`. You can access the front-end by opening a web browser and navigating to this URL.

## Contributing

If you find any issue or want to contribute to this project, please open an issue on this repository or submit a pull request. We welcome contributions from anyone, and thank you in advance for your help!


## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
