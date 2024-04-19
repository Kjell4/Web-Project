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
    category: string
    description: string;
    price: string;
    rating: number;
    likes: number;
}