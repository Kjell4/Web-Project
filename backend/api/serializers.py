from rest_framework import serializers

from api.models import Category, Book


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        instance = Category.objects.create(
            name=validated_data.get("name"),
        )
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name"),
        instance.save()
        return instance


class BookSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=50)

    class Meta:
        model = Book
        fields = ("id", "title",'author', 'year', 'publisher', 'image', 'category', 'description', 'price')