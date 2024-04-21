from django.contrib import admin


from api.models import Category, Book, Cart

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'year', 'publisher', 'image', 'category', 'description')
    search_fields = ('title',)

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('id', 'book', 'quantity')
    search_fields = ('book',)