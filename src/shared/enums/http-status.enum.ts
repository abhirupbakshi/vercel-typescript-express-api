import { constants } from 'node:http2';

export enum HttpStatus {
  OK = constants.HTTP_STATUS_OK,
  CREATED = constants.HTTP_STATUS_CREATED,
  ACCEPTED = constants.HTTP_STATUS_ACCEPTED,
  NO_CONTENT = constants.HTTP_STATUS_NO_CONTENT,
  MOVED_PERMANENTLY = constants.HTTP_STATUS_MOVED_PERMANENTLY,
  FOUND = constants.HTTP_STATUS_FOUND,
  SEE_OTHER = constants.HTTP_STATUS_SEE_OTHER,
  NOT_MODIFIED = constants.HTTP_STATUS_NOT_MODIFIED,
  TEMPORARY_REDIRECT = constants.HTTP_STATUS_TEMPORARY_REDIRECT,
  PERMANENT_REDIRECT = constants.HTTP_STATUS_PERMANENT_REDIRECT,
  BAD_REQUEST = constants.HTTP_STATUS_BAD_REQUEST,
  UNAUTHORIZED = constants.HTTP_STATUS_UNAUTHORIZED,
  FORBIDDEN = constants.HTTP_STATUS_FORBIDDEN,
  NOT_FOUND = constants.HTTP_STATUS_NOT_FOUND,
  INTERNAL_SERVER_ERROR = constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
}
