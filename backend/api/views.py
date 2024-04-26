from django.http import Http404, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cart, Category, Book
from .serializers import CartSerializer, CategorySerializer, BookSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import RetrieveAPIView
from django.contrib.auth.models import User


class CategoryList(APIView):
    @csrf_exempt
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class CategoryDetail(APIView):
    @csrf_exempt
    def get_object(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise Http404

    @csrf_exempt
    def get(self, request, pk):
        category = self.get_object(pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

class BookList(APIView):
    @csrf_exempt
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

class BookDetail(APIView):
    @csrf_exempt
    def get_object(self, pk):
        try:
            return Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            raise Http404

    @csrf_exempt
    def get(self, request, pk):
        book = self.get_object(pk)
        serializer = BookSerializer(book)
        return Response(serializer.data)
    
@csrf_exempt
def books_by_category(request, pk=None):
    try:
        books = Book.objects.filter(category_id=pk)
    except Book.DoesNotExist:
        raise Http404("Books for this category do not exist")

    books_json = [b.to_json() for b in books]

    return JsonResponse(books_json, safe=False)

@csrf_exempt
def book_by_id(request, pk=None, pk2=None):
    try:
        category = Category.objects.get(pk=pk)
        book = Book.objects.get(pk=pk2)
    except Book.DoesNotExist:
        raise Http404("Book does not exist")

    book_json = book.to_json()

    return JsonResponse(book_json, safe=False)

class CartView(APIView):

    serializer_class = CartSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get(self, request):
        queryset = self.get_queryset()
        serializer = CartSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        cart_item = Cart.objects.get(pk=pk)
        serializer = CartSerializer(cart_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        cart_item = Cart.objects.get(pk=pk)
        cart_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

