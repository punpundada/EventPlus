from django.shortcuts import render
from rest_framework import generics, permissions
from . import models as user_management_models
from . import serializers as user_management_serializers
from . import permissions as user_management_permissions
# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = user_management_models.UserModel
    serializer_class = user_management_serializers.UserSerializer
    permission_classes = (permissions.AllowAny,)
        
class UserDetailsView(generics.RetrieveAPIView):
    queryset =user_management_models.UserModel.objects.all()
    serializer_class = user_management_serializers.UserDetailsSerializer
    pagination_class = (permissions.IsAdminUser,user_management_permissions.IsOwner)
    pagination_class = None


class UserPromoteView(generics.UpdateAPIView):
    queryset = user_management_models.UserModel.objects.all()
    serializer_class = user_management_serializers.UserPromoteSerializer
    pagination_class = (permissions.IsAdminUser,)
    pagination_class=None
