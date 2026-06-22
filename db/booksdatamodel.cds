namespace db.books;

entity Books {
    key ID              : UUID;
        title           : String(100);
        author          : String(100);
        price           : Decimal(10, 2);
        publicationDate : Date;
        digitalCopy     : Boolean
}