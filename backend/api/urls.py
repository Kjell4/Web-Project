from django.urls import path
from api.views import CategoryList, CategoryDetail, BookList, BookDetail, books_by_category, book_by_id

urlpatterns = [
    path("categories/", CategoryList.as_view()),
    path("categories/<int:pk>/", CategoryDetail.as_view()),
    path("categories/<int:pk>/books/", books_by_category),
    path("books/", BookList.as_view()),
    path("books/<int:pk>/", BookDetail.as_view()),
    path("categories/<int:pk>/books/<int:pk2>", book_by_id)
]
