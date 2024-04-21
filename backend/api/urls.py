from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import CartView, CategoryList, CategoryDetail, BookList, BookDetail, books_by_category, book_by_id

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path("categories/", CategoryList.as_view()),
    path("categories/<int:pk>/", CategoryDetail.as_view()),
    path("categories/<int:pk>/books/", books_by_category),
    path("books/", BookList.as_view()),
    path("books/<int:pk>/", BookDetail.as_view()),
    path("categories/<int:pk>/books/<int:pk2>", book_by_id),
    path("cart/", CartView.as_view())
]
