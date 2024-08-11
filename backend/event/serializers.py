from rest_framework import serializers
from . import models
from django.core import exceptions
from django.db import transaction


class EventSerializer(serializers.ModelSerializer):
    # ticket = TicketSerializer
    class Meta:
        model = models.EventModel
        fields=(
            "id",
            "name",
            "description",
            "start_time",
            "end_time",
            "location",
            "capacity",
            "created_at",
            "updated_at",
            "image",
            # "ticket",
            )
        
    # def create(self,validated_data):
    #     ticket_data = validated_data.pop('ticket')
    #     event = models.EventModel.objects.create(**validated_data)
    #     TicketSerializer().create({**ticket_data,"event":event})
    #     return event

class EventListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EventModel
        fields=(
            "id",
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
    event_id=serializers.IntegerField(required=True)
    class Meta:
        model = models.TicketModel
        fields = ("id",'ticket_type', 'price',"event_id")

    def create(self, validated_data):
        try:
            event = models.EventModel.objects.get(pk=validated_data["event_id"])
        except models.EventModel.DoesNotExist:
            raise serializers.ValidationError({"event_id": "Invalid Event Id"})

        validated_data["available_capacity"] = event.capacity
        return super().create(validated_data)

class TicketListRerializer(serializers.ModelSerializer):
    class Meta:
        model=models.TicketModel
        

class RegistrationCreateSerializer(serializers.ModelSerializer):
    event_id=serializers.IntegerField(required=True)
    ticket_id=serializers.IntegerField(required=True)
    class Meta:
        model = models.RegistrationModel
        fields=("id","user_id","event_id","ticket_id","booked_tickets",)
        read_only_fields =("user_id",)

    def create(self, validated_data):
        with transaction.atomic():
            try:
                ticket = models.TicketModel.objects.get(pk=validated_data["ticket_id"])
            except models.TicketModel.DoesNotExist:
                raise serializers.ValidationError({"ticket_id": "Ticket does not exist."})
            
            if validated_data['booked_tickets'] > ticket.available_capacity:
                raise serializers.ValidationError({"booked_tickets": "Not enough tickets available."})

            ticket.available_capacity -= validated_data['booked_tickets']
            ticket.save()
            return super().create(validated_data)

        

