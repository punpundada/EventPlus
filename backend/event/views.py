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

class TicketCreateView(generics.ListCreateAPIView):
    queryset = models.TicketModel.objects.all()
    serializer_class = serializers.TicketSerializer
    permission_classes = (permissions.IsAuthenticated,)

class TicketListByEventView(generics.ListAPIView):
    serializer_class =serializers.TicketSerializer
    def get_queryset(self):
        event_id = self.kwargs.get('id')
        return models.TicketModel.objects(event_id=event_id)

class RegistrationCreateView(generics.ListCreateAPIView):
    queryset = models.RegistrationModel.objects.all()
    serializer_class = serializers.RegistrationCreateSerializer
    # permission_classes=(permissions.IsAuthenticated,)

    def perform_create(self,serializer):
        user = self.request.user
        print("Request data:", self.request.data)
        print("Validated data before save:", serializer.validated_data)
        serializer.save(user_id=user.id)

class EventByIdVIew(generics.RetrieveAPIView):
    queryset = models.EventModel.objects.all()
    serializer_class = serializers.EventSerializer
    lookup_field="id"
    # permission_classes=(permissions.IsAuthenticated,)
