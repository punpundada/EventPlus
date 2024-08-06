from rest_framework import serializers
from . import models
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EventModel
        fields=(
            "name",
            "description",
            "start_time",
            "end_time",
            "location",
            "capacity",
            "ticket_price",
            "created_at",
            "updated_at",
            "image",
            )
        
class EventListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EventModel
        fields=(
            "name",
            "description",
            "start_time",
            "end_time",
            "location",
            "capacity",
            "organizer",
            "ticket_price",
            "created_at",
            "updated_at",
            "image",
            )
        