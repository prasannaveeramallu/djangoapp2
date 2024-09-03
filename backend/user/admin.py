from django.contrib import admin
from .models import *
# Register your models here.
class UserAdmin(admin.ModelAdmin):

    # add the fields of the model here
    list_display = ("name","age")
admin.site.register(User, UserAdmin)