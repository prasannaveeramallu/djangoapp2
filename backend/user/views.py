from django.shortcuts import render
from rest_framework.response import Response

# import view sets from the REST framework
from rest_framework import viewsets

# import the TodoSerializer from the serializer file
from .serializers import UserSerializer

# import the Todo model from the models file
from .models import User

# create a class for the Todo model viewsets
class UserView(viewsets.ModelViewSet):

    # create a serializer class and 
    # assign it to the TodoSerializer class
    serializer_class = UserSerializer

    # define a variable and populate it 
    # with the Todo list objects
    queryset = User.objects.all()

   
        