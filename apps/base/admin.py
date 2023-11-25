from django.contrib import admin
from apps.base.models import Index

class IndexAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "logo", "email", "number", "locate", "whatsapp", "telegram", "slug")
    prepopulated_fields = {"slug": ['title'], }

admin.site.register(Index, IndexAdmin)
