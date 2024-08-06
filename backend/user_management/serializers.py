from rest_framework import serializers
from . import models
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserModel
        fields=("id","username","email","password","first_name","last_name")
        extra_kwargs = {"password":{"write_only":True}}
    def validate_password(self,value:str)->str:
         return make_password(value)

class UserPromoteSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.UserModel
        fields=("user_type",)

class UserDetailsSerializer(serializers.ModelSerializer):
        class Meta:
            model = models.UserModel
            fields=("id","username","email","first_name","last_name","user_type")