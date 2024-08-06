from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
USER_TYPE_CHOICES = (
        ('organizer', 'Organizer'),
        ('attendee', 'Attendee'),
        ('admin', 'Admin'),
        ('vendor', 'Vendor'),
    )

class UserModel(AbstractUser):
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES, default='attendee')
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Ensure this name is unique
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',  # Ensure this name is unique
        blank=True
    )

    def __str__(self):
        return self.username