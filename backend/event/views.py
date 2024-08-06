from django.shortcuts import render
from rest_framework import generics, permissions
from . import models
from . import serializers
# Create your views here.


class EventCreateView(generics.CreateAPIView):
    queryset = models.EventModel.objects.all()
    serializer_class = serializers.EventSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(organizer=self.request.user)

        
class EventListView(generics.ListAPIView):
    queryset = models.EventModel.objects.all()
    serializer_class = serializers.EventSerializer
    permission_classes = (permissions.AllowAny,)