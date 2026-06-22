using {db.books as mybooks} from '../db/booksdatamodel';

service BooksSrv {
    entity Bookset as projection on mybooks.Books;
}
