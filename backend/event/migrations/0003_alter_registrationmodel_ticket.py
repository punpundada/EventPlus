# Generated by Django 5.0.7 on 2024-08-10 15:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("event", "0002_remove_eventmodel_ticket_price_registrationmodel_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="registrationmodel",
            name="ticket",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="event.ticketmodel"
            ),
        ),
    ]
