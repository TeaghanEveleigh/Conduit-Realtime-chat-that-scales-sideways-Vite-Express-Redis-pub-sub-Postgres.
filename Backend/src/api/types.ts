
// Typed error with an HTTP status
export class AppError extends Error {
  constructor(public message: string, public status: number) {
    super(message);
    this.name = 'AppError';
  }
}