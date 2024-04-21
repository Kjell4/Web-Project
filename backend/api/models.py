from django.db import models

from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    year = models.IntegerField()
    publisher = models.CharField(max_length=255)
    image = models.URLField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    price = models.CharField(max_length=50)
    rating = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Book"
        verbose_name_plural = "Books"

    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "year": self.year,
            "publisher": self.publisher,
            "image": self.image,
            "category": self.category.name,
            "description": self.description,
            "price": self.price,
            "rating": self.rating
        }