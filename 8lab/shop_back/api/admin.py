from django.contrib import admin
from .models import Product, Category

admin.site.register(Product)
admin.site.register(Category)
# @admin.register(Category)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name')
#     search_fields = ('name',)

# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'price', 'description', 'count', 'is_active', 'display_categories')
#     search_fields = ('name',)

#     def display_categories(self, obj):
#         return ", ".join([category.name for category in obj.categories.all()])

#     display_categories.short_description = 'Categories'
