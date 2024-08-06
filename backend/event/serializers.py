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
            "created_at",
            "updated_at",
            "image",
            "ticket",
            )
        
    def create(self,validated_data):
        ticket_data = validated_data.pop('ticket')
        event = models.EventModel.objects.create(**validated_data)
        TicketSerializer().create({**ticket_data,"event":event})
        return event

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



class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TicketModel
        fields = ('ticket_type', 'price')

    def create(self, validated_data):
        event = self.context['event']
        validated_data['available_capacity'] = event.capacity
        validated_data['event'] = event
        return super().create(validated_data)