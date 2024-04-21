export interface Category{
    id: number;
    name: string;
}

export interface Book{
    id: number;
    title: string;
    author: string;
    year: number;
    publisher: string;
    image: URL;
    category: Category;
    description: string;
    price: string;
    rating: number;
    likes: number;
}

export interface CartItem {
    book: Book;
    quantity: number;
}

export interface Token{
    access: string;
    refresh: string;
}